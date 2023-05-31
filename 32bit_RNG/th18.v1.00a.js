{
    "options": {
        //these are solely to make porting to other games easier
        "Dai.RNG32.addr.rng_rand_dword": {
            "type": "u32",
            "val": "<0x402740>"
        },
        "Dai.RNG32.addr.rng_rand_word": {
            "type": "u32",
            "val": "<0x4026D0>"
        },
        "Dai.RNG32.addr.replay_unsafe_rng": {
            "type": "u32",
            "val": "<0x4CF288>"
        },
        "Dai.RNG32.addr.replay_safe_rng": {
            "type": "u32",
            "val": "<0x4CF280>"
        },
        "Dai.RNG32.addr.stage_num_global": {
            "type": "u32",
            "val": "<0x4CCCDC>"
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
            "addr": 0x4536E9,
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
            "addr": 0x442EC4,
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
            "addr": 0x442F3A,
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
                <nop:10>
            */
        },
        "Dai.RNG32.init_state.replay_recording.1": {
            "addr": 0x461753,
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
            "addr": 0x4619E1,
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
            "addr": 0x463750,
            "expected": "8A15 BE175200 84D2 74 13 68 50175200",
            "code": "B9 <option:Dai.RNG32.addr.replay_unsafe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 59 <nop:3>"
        },
        "Dai.RNG32.rand_word.replace_inlined.0b": {
            "addr": 0x4637B5,
            "expected": "66890E",
            "code": "668906"
        },
        "Dai.RNG32.rand_word.replace_inlined.1a": {
            "addr": 0x470570,
            "expected": "803D BE175200 00 74 0D 68 50175200",
            "code": "B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 53 <nop:2>"
        },
        "Dai.RNG32.rand_word.replace_inlined.1b": {
            "addr": 0x4705CF,
            "expected": "66C1E9 09 888E B0D94C00",
            "code": "C1E8 09 8886 B0D94C00 <nop:1>"
        },
        
        "Dai.RNG32.rand_dword.replace_inlined.0a": {
            "addr": 0x46E060,
            "expected": "8A15 BE175200 84D2 74 13 68 50175200",
            "code": "B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 72 <nop:3>"
        },
        "Dai.RNG32.rand_dword.replace_inlined.0b": {
            "addr": 0x46E0DE,
            "expected": "889E 00FCFFFF",
            "code": "8886 00FCFFFF"
        },
        "Dai.RNG32.rand_dword.replace_inlined.1a": {
            "addr": 0x46E0F0,
            "expected": "8A15 BE175200 84D2 74 13 68 50175200",
            "code": "B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 77 <nop:3>"
        },
        "Dai.RNG32.rand_dword.replace_inlined.1b": {
            "addr": 0x46E173,
            "expected": "889E 00FDFFFF",
            "code": "8886 00FDFFFF"
        },
        "Dai.RNG32.rand_dword.replace_inlined.2a": {
            "addr": 0x46E179,
            "expected": "8A15 BE175200 84D2 74 13 68 50175200",
            "code": "B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 77 <nop:3>"
        },
        "Dai.RNG32.rand_dword.replace_inlined.2b": {
            "addr": 0x46E1FC,
            "expected": "881E",
            "code": "8806"
        },
    },
}