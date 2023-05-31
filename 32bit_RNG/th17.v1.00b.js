{
    "options": {
        //these are solely to make porting to other games easier
        "Dai.RNG32.addr.rng_rand_dword": {
            "type": "u32",
            "val": "<0x4027B0>"
        },
        "Dai.RNG32.addr.rng_rand_word": {
            "type": "u32",
            "val": "<0x402740>"
        },
        "Dai.RNG32.addr.replay_unsafe_rng": {
            "type": "u32",
            "val": "<0x4B7668>"
        },
        "Dai.RNG32.addr.replay_safe_rng": {
            "type": "u32",
            "val": "<0x4B7660>"
        },
        "Dai.RNG32.addr.stage_num_global": {
            "type": "u32",
            "val": "<0x4B59DC>"
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
            "addr": 0x4410F4,
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
            "addr": 0x43093E,
            "expected": "\
                0FB705 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                668941 02 \
                66A3 <option:Dai.RNG32.addr.replay_safe_rng> \
                66A1 <option:Dai.RNG32.addr.stage_num_global> \
                C705 (<option:Dai.RNG32.addr.replay_unsafe_rng>+4) 00000000 \
                668901 \
            ",
            /*
                MOVZX EAX,WORD PTR [REPLAY_UNSAFE_RNG]
                MOV WORD PTR [ECX+2],AX
                MOV WORD PTR [REPLAY_SAFE_RNG],AX //this line is removed
                MOV AX,WORD PTR [CURRENT_STAGE_NUM]
                MOV DWORD PTR [REPLAY_UNSAFE_RNG+4],0
                MOV WORD PTR [ECX],AX
            */
            "code": "\
                0FB705 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                668941 02 \
                A3 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                <nop:1> \
                66A1 <option:Dai.RNG32.addr.stage_num_global> \
                C705 (<option:Dai.RNG32.addr.replay_unsafe_rng>+4) 00000000 \
                668901 \
            ",
            /*
                MOVZX EAX,WORD PTR [REPLAY_UNSAFE_RNG]
                MOV WORD PTR [ECX+2],AX
                MOV DWORD PTR [REPLAY_UNSAFE_RNG],EAX
                MOV AX,WORD PTR [CURRENT_STAGE_NUM]
                MOV DWORD PTR [REPLAY_UNSAFE_RNG+4],0
                MOV WORD PTR [ECX],AX
            */
        },
        "Dai.RNG32.init_state.replay_playback.0": {
            "addr": 0x4309B9,
            "expected": "\
                0FB742 02 \
                66A3 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                0FB742 02 \
                66A3 <option:Dai.RNG32.addr.replay_safe_rng> \
            ",
            /*
                MOVZX EAX,WORD PTR [EDX+2]
                MOV WORD PTR [REPLAY_UNSAFE_RNG],AX
                MOVZX EAX,WORD PTR [EDX+2]
                MOV WORD PTR [REPLAY_SAFE_RNG],AX
            */
            "code": "\
                0FB742 02 \
                A3 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                <nop:11> \
            ",
            /*
                MOVZX EAX,WORD PTR [EDX+2]
                MOV DWORD PTR [REPLAY_UNSAFE_RNG],EAX
                <nop:11>
            */
        },
        "Dai.RNG32.init_state.replay_recording.1": {
            "addr": 0x44DD70,
            "expected": "\
                0FB705 <option:Dai.RNG32.addr.stage_num_global> \
                668907 \
                0FB705 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                668947 02 \
                C705 (<option:Dai.RNG32.addr.replay_unsafe_rng>+4) 00000000 \
            ",
            /*
                MOVZX EAX,WORD PTR [CURRENT_STAGE_NUM]
                MOV WORD PTR [EDI],AX
                MOVZX EAX,WORD PTR [REPLAY_UNSAFE_RNG]
                MOV WORD PTR [EDI+2],AX
                MOV DWORD PTR [REPLAY_UNSAFE_RNG+4],0
            */
            "code": "\
                A1 <option:Dai.RNG32.addr.stage_num_global> \
                668907 \
                0FB705 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                668947 02 \
                A3 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                31C0 \
                A3 (<option:Dai.RNG32.addr.replay_unsafe_rng>+4) \
            ",
            /*
                MOV EAX,DWORD PTR [CURRENT_STAGE_NUM]
                MOV WORD PTR [EDI],AX
                MOVZX EAX,WORD PTR [REPLAY_UNSAFE_RNG]
                MOV WORD PTR [EDI+2],AX
                MOV DWORD PTR [REPLAY_UNSAFE_RNG],EAX
                XOR EAX,EAX
                MOV DWORD PTR [REPLAY_UNSAFE_RNG+4],EAX
            */
        },
        "Dai.RNG32.init_state.replay_playback.1": {
            "addr": 0x44DFFE,
            "expected": "\
                668B42 02 \
                66A3 <option:Dai.RNG32.addr.replay_unsafe_rng> \
            ",
            /*
                MOV AX,WORD PTR [EDX+2]
                MOV WORD PTR [REPLAY_UNSAFE_RNG],AX
            */
            "code": "\
                0FB742 02 \
                A3 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                <nop:1> \
            ",
            /*
                MOVZX EAX,WORD PTR [EDX+2]
                MOV DWORD PTR [REPLAY_UNSAFE_RNG],EAX
                <nop:1>
            */
        },
        
        
        "Dai.RNG32.rand_word.replace_inlined.0a": {
            "addr": 0x44FB60,
            "expected": "8A15 8E9B5000 84D2 74 17 68 209B5000",
            "code": "B9 <option:Dai.RNG32.addr.replay_unsafe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 5D <nop:3>"
        },
        "Dai.RNG32.rand_word.replace_inlined.0b": {
            "addr": 0x44FBC9,
            "expected": "66890E",
            "code": "668906"
        },
        "Dai.RNG32.rand_word.replace_inlined.1a": {
            "addr": 0x45FA40,
            "expected": "803D 8E9B5000 00 74 0D 68 209B5000",
            "code": "B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 53 <nop:2>"
        },
        "Dai.RNG32.rand_word.replace_inlined.1b": {
            "addr": 0x45FA9F,
            "expected": "66C1E9 09 888E 90654B00",
            "code": "C1E8 09 8886 90654B00 <nop:1>"
        },
        
        "Dai.RNG32.rand_dword.replace_inlined.0a": {
            "addr": 0x45D470,
            "expected": "8A15 8E9B5000 84D2 74 13 68 209B5000",
            "code": "B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 72 <nop:3>"
        },
        "Dai.RNG32.rand_dword.replace_inlined.0b": {
            "addr": 0x45D4EE,
            "expected": "881E",
            "code": "8806"
        },
        "Dai.RNG32.rand_dword.replace_inlined.1a": {
            "addr": 0x45D500,
            "expected": "8A15 8E9B5000 84D2 74 13 68 209B5000",
            "code": "B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 77 <nop:3>"
        },
        "Dai.RNG32.rand_dword.replace_inlined.1b": {
            "addr": 0x45D583,
            "expected": "889E 00FDFFFF",
            "code": "8886 00FDFFFF"
        },
        "Dai.RNG32.rand_dword.replace_inlined.2a": {
            "addr": 0x45D589,
            "expected": "8A15 8E9B5000 84D2 74 13 68 209B5000",
            "code": "B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 77 <nop:3>"
        },
        "Dai.RNG32.rand_dword.replace_inlined.2b": {
            "addr": 0x45D60C,
            "expected": "881E",
            "code": "8806"
        },
    },
}