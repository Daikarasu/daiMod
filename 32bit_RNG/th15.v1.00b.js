{
    "options": {
        //these are solely to make porting to other games easier
        "Dai.RNG32.addr.rng_rand_dword": {
            "type": "u32",
            "val": "<0x4036A0>"
        },
        "Dai.RNG32.addr.rng_rand_dword_copy": {
            "type": "u32",
            "val": "<0x403730>"
        },
        "Dai.RNG32.addr.rng_rand_word": {
            "type": "u32",
            "val": "<0x403630>"
        },
        "Dai.RNG32.addr.replay_unsafe_rng": {
            "type": "u32",
            "val": "<0x4E9A48>"
        },
        "Dai.RNG32.addr.replay_safe_rng": {
            "type": "u32",
            "val": "<0x4E9A40>"
        },
        "Dai.RNG32.addr.stage_num_global": {
            "type": "u32",
            "val": "<0x4E73F0>"
        },
    },
    "binhacks": {
        "Dai.RNG32.rand_dword.jmp_to_new": {
            "addr": "<option:Dai.RNG32.addr.rng_rand_dword>",
            "code": "E9 [codecave:Dai.RNG32.rand_dword]",
        },
        "Dai.RNG32.rand_dword_copy.jmp_to_new": {
            "addr": "<option:Dai.RNG32.addr.rng_rand_dword_copy>",
            "code": "E9 [codecave:Dai.RNG32.rand_dword]",
        },
        "Dai.RNG32.rand_word.jmp_to_new": {
            "addr": "<option:Dai.RNG32.addr.rng_rand_word>",
            "code": "E9 [codecave:Dai.RNG32.rand_word]",
        },
        "Dai.RNG32.init_state": {
            "addr": 0x44C584,
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
            "addr": 0x45D0CC,
            "expected": "\
                0FB705 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                5F \
                5E \
                668941 02 \
                66A3 <option:Dai.RNG32.addr.replay_safe_rng> \
                66A1 <option:Dai.RNG32.addr.stage_num_global> \
                C705 (<option:Dai.RNG32.addr.replay_unsafe_rng>+4) 00000000 \
                668901 \
            ",
            /*
                MOVZX EAX,WORD PTR [REPLAY_UNSAFE_RNG]
                POP EDI
                POP ESI
                MOV WORD PTR [ECX+2],AX
                MOV WORD PTR [REPLAY_SAFE_RNG],AX //this line is removed
                MOV AX,WORD PTR [CURRENT_STAGE_NUM]
                MOV DWORD PTR [REPLAY_UNSAFE_RNG+4],0
                MOV WORD PTR [ECX],AX
            */
            "code": "\
                0FB705 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                5F \
                5E \
                668941 02 \
                A3 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                <nop:1> \
                66A1 <option:Dai.RNG32.addr.stage_num_global> \
                C705 (<option:Dai.RNG32.addr.replay_unsafe_rng>+4) 00000000 \
                668901 \
            ",
            /*
                MOVZX EAX,WORD PTR [REPLAY_UNSAFE_RNG]
                POP EDI
                POP ESI
                MOV WORD PTR [ECX+2],AX
                MOV DWORD PTR [REPLAY_UNSAFE_RNG],EAX
                MOV AX,WORD PTR [CURRENT_STAGE_NUM]
                MOV DWORD PTR [REPLAY_UNSAFE_RNG+4],0
                MOV WORD PTR [ECX],AX
            */
        },
        "Dai.RNG32.init_state.replay_playback.0": {
            "addr": 0x45D141,
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
            "addr": 0x45B791,
            "expected": "\
                0FB705 <option:Dai.RNG32.addr.stage_num_global> \
                668902 \
                0FB705 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                668942 02 \
                C705 (<option:Dai.RNG32.addr.replay_unsafe_rng>+4) 00000000 \
            ",
            /*
                MOVZX EAX,WORD PTR [CURRENT_STAGE_NUM]
                MOV WORD PTR [EDX],AX
                MOVZX EAX,WORD PTR [REPLAY_UNSAFE_RNG]
                MOV WORD PTR [EDX+2],AX
                MOV DWORD PTR [REPLAY_UNSAFE_RNG+4],0
            */
            "code": "\
                A1 <option:Dai.RNG32.addr.stage_num_global> \
                668902 \
                0FB705 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                668942 02 \
                A3 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                31C0 \
                A3 (<option:Dai.RNG32.addr.replay_unsafe_rng>+4) \
            ",
            /*
                MOV EAX,DWORD PTR [CURRENT_STAGE_NUM]
                MOV WORD PTR [EDX],AX
                MOVZX EAX,WORD PTR [REPLAY_UNSAFE_RNG]
                MOV WORD PTR [EDX+2],AX
                MOV DWORD PTR [REPLAY_UNSAFE_RNG],EAX
                XOR EAX,EAX
                MOV DWORD PTR [REPLAY_UNSAFE_RNG+4],EAX
            */
        },
        "Dai.RNG32.init_state.replay_playback.1": {
            "addr": 0x45BA40,
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
            "addr": 0x409EEE,
            "expected": "8A15 863D5000 84D2 74 13 68 183D5000",
            "code": "B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 59 <nop:3>"
        },
        "Dai.RNG32.rand_word.replace_inlined.0b": {
            "addr": 0x409F53,
            "expected": "0FB7C1",
            "code": "0FB7C0"
        },
        "Dai.RNG32.rand_word.replace_inlined.1a": {
            "addr": 0x409F67,
            "expected": "8A15 863D5000 84D2 74 13 68 183D5000",
            "code": "B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 59 <nop:3>"
        },
        "Dai.RNG32.rand_word.replace_inlined.1b": {
            "addr": 0x409FCC,
            "expected": "0FB7C1",
            "code": "0FB7C0"
        },
        "Dai.RNG32.rand_word.replace_inlined.2a": {
            "addr": 0x409FE0,
            "expected": "8A15 863D5000 84D2 74 13 68 183D5000",
            "code": "B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 5A <nop:3>"
        },
        "Dai.RNG32.rand_word.replace_inlined.2b": {
            "addr": 0x40A046,
            "expected": "0FB7C1",
            "code": "0FB7C0"
        },
        "Dai.RNG32.rand_word.replace_inlined.3": {
            "addr": 0x45DB55,
            "expected": "8A15 863D5000 84D2 74 13 68 183D5000",
            "code": "B9 <option:Dai.RNG32.addr.replay_unsafe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 57 <nop:3>"
        },
        "Dai.RNG32.rand_word.replace_inlined.4a": {
            "addr": 0x46F750,
            "expected": "803D 863D5000 00 74 0D 68 183D5000",
            "code": "B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 53 <nop:2>"
        },
        "Dai.RNG32.rand_word.replace_inlined.4b": {
            "addr": 0x46F7AF,
            "expected": "66C1E9 09 888E 70824E00",
            "code": "C1E8 09 8886 70824E00 <nop:1>"
        },
    },
}