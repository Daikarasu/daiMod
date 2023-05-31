{
    "options": {
        //these are solely to make porting to other games easier
        "Dai.RNG32.addr.rng_rand_dword": {
            "type": "u32",
            "val": "<0x402BE0>"
        },
        "Dai.RNG32.addr.rng_rand_word": {
            "type": "u32",
            "val": "<0x402B70>"
        },
        "Dai.RNG32.addr.replay_unsafe_rng": {
            "type": "u32",
            "val": "<0x4A6D88>"
        },
        "Dai.RNG32.addr.replay_safe_rng": {
            "type": "u32",
            "val": "<0x4A6D80>"
        },
        "Dai.RNG32.addr.stage_num_global": {
            "type": "u32",
            "val": "<0x4A5790>"
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
            "addr": 0x43B554,
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
            "addr": 0x449075,
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
            "addr": 0x4490EA,
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
            "addr": 0x4478BE,
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
            "addr": 0x447B66,
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
        
        
        "Dai.RNG32.rand_word.replace_inlined.0": {
            "addr": 0x449765,
            "expected": "8A15 B6104C00 84D2 74 13 68 48104C00",
            "code": "B9 <option:Dai.RNG32.addr.replay_unsafe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 57 <nop:3>"
        },
        "Dai.RNG32.rand_word.replace_inlined.1a": {
            "addr": 0x458E60,
            "expected": "803D B6104C00 00 74 0D 68 48104C00",
            "code": "B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 53 <nop:2>"
        },
        "Dai.RNG32.rand_word.replace_inlined.1b": {
            "addr": 0x458EBF,
            "expected": "66C1E9 09 888E 605C4A00",
            "code": "C1E8 09 8886 605C4A00 <nop:1>"
        },
    },
}