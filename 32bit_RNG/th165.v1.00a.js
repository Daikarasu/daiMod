{
    "options": {
        //these are solely to make porting to other games easier
        "Dai.RNG32.addr.rng_rand_dword": {
            "type": "u32",
            "val": "<0x4026A0>"
        },
        "Dai.RNG32.addr.rng_rand_word": {
            "type": "u32",
            "val": "<0x402630>"
        },
        "Dai.RNG32.addr.replay_unsafe_rng": {
            "type": "u32",
            "val": "<0x4B54E8>"
        },
        "Dai.RNG32.addr.replay_safe_rng": {
            "type": "u32",
            "val": "<0x4B54E0>"
        },
        "Dai.RNG32.addr.stage_num_global": {
            "type": "u32",
            "val": "<0x4B3AD8>"
        },
    },
    "binhacks": {
        "Dai.RNG32.rand_dword.jmp_to_new": {
            "addr": "<option:Dai.RNG32.addr.rng_rand_dword>",
            "code": "E9 [codecave:Dai.RNG32.rand_dword]",
        },
        "Dai.RNG32.rand_word.jmp_to_new": {
            "addr": "<option:Dai.RNG32.addr.rng_rand_word>",
            "code": "E9 [codecave:Dai.RNG32.rand_word]",
        },
        "Dai.RNG32.init_state": {
            "addr": 0x4387F4,
            "expected": "\
                66A3 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                66A3 <option:Dai.RNG32.addr.replay_safe_rng> \
            ",
            /*
                MOV WORD PTR [REPLAY_UNSAFE_RNG],AX
                MOV WORD PTR [REPLAY_SAFE_RNG],AX
            */
            "code": "\
                A3 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                A3 <option:Dai.RNG32.addr.replay_safe_rng> \
                <nop:2>\
            ",
            /*
                MOV DWORD PTR [REPLAY_UNSAFE_RNG],EAX
                MOV DWORD PTR [REPLAY_SAFE_RNG],EAX
                <nop:2>
            */
        },
        "Dai.RNG32.init_state.replay_recording.0": {
            "addr": 0x428C7A,
            "expected": "\
                0FB70D <option:Dai.RNG32.addr.replay_unsafe_rng> \
                66894E 02 \
                66A1 <option:Dai.RNG32.addr.stage_num_global> \
                66890D <option:Dai.RNG32.addr.replay_safe_rng> \
                C705 (<option:Dai.RNG32.addr.replay_unsafe_rng>+4) 00000000 \
                668906 \
            ",
            /*
                MOVZX ECX,WORD PTR [REPLAY_UNSAFE_RNG]
                MOV WORD PTR [ESI+2],CX
                MOV AX,WORD PTR [CURRENT_STAGE_NUM]
                MOV WORD PTR [REPLAY_SAFE_RNG],CX
                MOV DWORD PTR [REPLAY_UNSAFE_RNG+4],0
                MOV WORD PTR [ESI],AX
            */
            "code": "\
                0FB70D <option:Dai.RNG32.addr.replay_unsafe_rng> \
                66894E 02 \
                66A1 <option:Dai.RNG32.addr.stage_num_global> \
                890D <option:Dai.RNG32.addr.replay_unsafe_rng> \
                <nop:1> \
                C705 (<option:Dai.RNG32.addr.replay_unsafe_rng>+4) 00000000 \
                668906 \
            ",
            /*
                MOVZX ECX,WORD PTR [REPLAY_UNSAFE_RNG]
                MOV WORD PTR [ESI+2],CX
                MOV AX,WORD PTR [CURRENT_STAGE_NUM]
                MOV WORD PTR [REPLAY_SAFE_RNG],CX
                MOV DWORD PTR [REPLAY_UNSAFE_RNG+4],0
                MOV WORD PTR [ESI],AX
            */
        },
        "Dai.RNG32.init_state.replay_playback.0": {
            "addr": 0x428CDB,
            "expected": "\
                0FB746 02 \
                66A3 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                0FB746 02 \
                83C6 14 \
                66A3 <option:Dai.RNG32.addr.replay_safe_rng> \
            ",
            /*
                MOVZX EAX,WORD PTR [ESI+2]
                MOV WORD PTR [REPLAY_UNSAFE_RNG],AX
                MOVZX EAX,WORD PTR [ESI+2]
                ADD ESI,14
                MOV WORD PTR [REPLAY_SAFE_RNG],AX
            */
            "code": "\
                0FB746 02 \
                A3 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                83C6 14 \
                <nop:11> \
            ",
            /*
                MOVZX EAX,WORD PTR [ESI+2]
                MOV DWORD PTR [REPLAY_UNSAFE_RNG],EAX
                ADD ESI,14
                <nop:11>
            */
        },
        "Dai.RNG32.init_state.replay_recording.1": {
            "addr": 0x44F401,
            "expected": "\
                0FB705 <option:Dai.RNG32.addr.stage_num_global> \
                668906 \
                0FB705 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                668946 02 \
                C705 (<option:Dai.RNG32.addr.replay_unsafe_rng>+4) 00000000 \
            ",
            /*
                MOVZX EAX,WORD PTR [CURRENT_STAGE_NUM]
                MOV WORD PTR [ESI],AX
                MOVZX EAX,WORD PTR [REPLAY_UNSAFE_RNG]
                MOV WORD PTR [ESI+2],AX
                MOV DWORD PTR [REPLAY_UNSAFE_RNG+4],0
            */
            "code": "\
                A1 <option:Dai.RNG32.addr.stage_num_global> \
                668906 \
                0FB705 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                668946 02 \
                A3 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                31C0 \
                A3 (<option:Dai.RNG32.addr.replay_unsafe_rng>+4) \
            ",
            /*
                MOV EAX,DWORD PTR [CURRENT_STAGE_NUM]
                MOV WORD PTR [ESI],AX
                MOVZX EAX,WORD PTR [REPLAY_UNSAFE_RNG]
                MOV WORD PTR [ESI+2],AX
                MOV DWORD PTR [REPLAY_UNSAFE_RNG],EAX
                XOR EAX,EAX
                MOV DWORD PTR [REPLAY_UNSAFE_RNG+4],EAX
            */
        },
        "Dai.RNG32.init_state.replay_playback.1": {
            "addr": 0x44F64B,
            "expected": "\
                668B46 02 \
                83C6 14 \
                66A3 <option:Dai.RNG32.addr.replay_unsafe_rng> \
            ",
            /*
                MOV AX,WORD PTR [ESI+2]
                ADD ESI,14
                MOV WORD PTR [REPLAY_UNSAFE_RNG],AX
            */
            "code": "\
                0FB746 02 \
                83C6 14 \
                A3 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                <nop:1> \
            ",
            /*
                MOVZX EAX,WORD PTR [ESI+2]
                ADD ESI,14
                MOV DWORD PTR [REPLAY_UNSAFE_RNG],EAX
            */
        },
        
        
        "Dai.RNG32.rand_word.replace_inlined.0a": {
            "addr": 0x450B40,
            "expected": "8A15 FE795000 84D2 74 17 68 90795000",
            "code": "B9 <option:Dai.RNG32.addr.replay_unsafe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 59 <nop:3>"
        },
        "Dai.RNG32.rand_word.replace_inlined.0b": {
            "addr": 0x450BA5,
            "expected": "66890E",
            "code": "668906"
        },
        "Dai.RNG32.rand_word.replace_inlined.1a": {
            "addr": 0x45E550,
            "expected": "803D FE795000 00 74 0D 68 90795000",
            "code": "B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 53 <nop:2>"
        },
        "Dai.RNG32.rand_word.replace_inlined.1b": {
            "addr": 0x45E5AF,
            "expected": "66C1E9 09 888E A0454B00",
            "code": "C1E8 09 8886 A0454B00 <nop:1>"
        },
        
        "Dai.RNG32.rand_dword.replace_inlined.0a": {
            "addr": 0x45B770,
            "expected": "8A15 FE795000 84D2 74 13 68 90795000",
            "code": "B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 72 <nop:3>"
        },
        "Dai.RNG32.rand_dword.replace_inlined.0b": {
            "addr": 0x45B7EE,
            "expected": "881E",
            "code": "8806"
        },
        "Dai.RNG32.rand_dword.replace_inlined.1a": {
            "addr": 0x45B800,
            "expected": "8A15 FE795000 84D2 74 13 68 90795000",
            "code": "B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 77 <nop:3>"
        },
        "Dai.RNG32.rand_dword.replace_inlined.1b": {
            "addr": 0x45B883,
            "expected": "889E 00FDFFFF",
            "code": "8886 00FDFFFF"
        },
        "Dai.RNG32.rand_dword.replace_inlined.2a": {
            "addr": 0x45B889,
            "expected": "8A15 FE795000 84D2 74 13 68 90795000",
            "code": "B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 77 <nop:3>"
        },
        "Dai.RNG32.rand_dword.replace_inlined.2b": {
            "addr": 0x45B90C,
            "expected": "881E",
            "code": "8806"
        },
    },
}