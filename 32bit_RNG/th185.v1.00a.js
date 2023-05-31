{
    "options": {
        //these are solely to make porting to other games easier
        "Dai.RNG32.addr.rng_rand_dword": {
            "type": "u32",
            "val": "<0x402800>"
        },
        "Dai.RNG32.addr.rng_rand_word": {
            "type": "u32",
            "val": "<0x402790>"
        },
        "Dai.RNG32.addr.replay_unsafe_rng": {
            "type": "u32",
            "val": "<0x4D7AA8>"
        },
        "Dai.RNG32.addr.replay_safe_rng": {
            "type": "u32",
            "val": "<0x4D7AA0>"
        },
        "Dai.RNG32.addr.stage_num_global": {
            "type": "u32",
            "val": "<0x4D1004>"
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
            "addr": 0x459DB9,
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
        "Dai.RNG32.init_state.replay_recording.1": {
            "addr": 0x4672DD,
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
            "addr": 0x467463,
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
        
        
        "Dai.RNG32.rand_word.replace_inlined.0": {
            "addr": 0x472BA0,
            "expected": "803D F69F5200 00 74 0D 68 889F5200 FFD7",
            "code": "B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_dword] 0FB7C8 EB 50 <nop:1>"
        },
        
        "Dai.RNG32.rand_dword.replace_inlined.0": {
            "addr": 0x41CBAE,
            "expected": "8A15 F69F5200 84D2 74 17 68 889F5200 FF15 7CF04A00",
            "code": "B9 <option:Dai.RNG32.addr.replay_unsafe_rng> E8 [codecave:Dai.RNG32.rand_dword] 31D2 E9 8D000000 <nop:4>"
        },
        "Dai.RNG32.rand_dword.replace_inlined.1a": {
            "addr": 0x4690E4,
            "expected": "8A15 F69F5200 84D2 74 17 68 889F5200",
            "code": "B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 76 <nop:3>"
        },
        "Dai.RNG32.rand_dword.replace_inlined.1b": {
            "addr": 0x469166,
            "expected": "889C37 1C070000",
            "code": "888437 1C07000"
        },
        "Dai.RNG32.rand_dword.replace_inlined.2a": {
            "addr": 0x469180,
            "expected": "8A15 F69F5200 84D2 74 17 68 889F5200",
            "code": "B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 7B <nop:3>"
        },
        "Dai.RNG32.rand_dword.replace_inlined.2b": {
            "addr": 0x469207,
            "expected": "889C37 3E070000",
            "code": "888437 3E070000"
        },
        "Dai.RNG32.rand_dword.replace_inlined.3": {
            "addr": 0x470647,
            "expected": "803D F69F5200 00 74 11 68 889F5200 FF15 7CF04A00 FE05 F29F5200 A1 A07A4D00 8305 A47A4D00 02",
            "code": "B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_dword] 8886 00FDFFFF B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_dword] 8806 E9 F1000000 <nop:5>"
        },
    },
}