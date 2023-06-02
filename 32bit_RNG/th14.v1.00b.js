{
    "options": {
        //these are solely to make porting to other games easier
        "Dai.RNG32.addr.rng_rand_dword": {
            "type": "u32",
            "val": "<0x403310>"
        },
        "Dai.RNG32.addr.rng_rand_dword_copy": {
            "type": "u32",
            "val": "<0x4033A0>"
        },
        "Dai.RNG32.addr.rng_rand_word": {
            "type": "u32",
            "val": "<0x4032A0>"
        },
        "Dai.RNG32.addr.replay_unsafe_rng": {
            "type": "u32",
            "val": "<0x4DB510>"
        },
        "Dai.RNG32.addr.replay_safe_rng": {
            "type": "u32",
            "val": "<0x4DB508>"
        },
        "Dai.RNG32.addr.stage_num_global": {
            "type": "u32",
            "val": "<0x4F58A4>"
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
            "addr": 0x444A24,
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
            "addr": 0x45609C,
            "expected": "\
                0FB705 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                668941 02 \
                0FB7C0 \
                66A3 <option:Dai.RNG32.addr.replay_safe_rng> \
                0FB705 <option:Dai.RNG32.addr.stage_num_global> \
                C705 (<option:Dai.RNG32.addr.replay_unsafe_rng>+4) 00000000 \
                668901 \
            ",
            /*
                MOVZX EAX,WORD PTR [REPLAY_UNSAFE_RNG]
                MOV WORD PTR [ECX+2],AX
                MOVZX EAX,AX                      //
                MOV WORD PTR [REPLAY_SAFE_RNG],AX //these lines are removed
                MOVZX EAX,WORD PTR [CURRENT_STAGE_NUM]
                MOV DWORD PTR [REPLAY_UNSAFE_RNG+4],0
                MOV WORD PTR [ECX],AX
            */
            "code": "\
                0FB705 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                668941 02 \
                A3 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                <nop:4> \
                0FB705 <option:Dai.RNG32.addr.stage_num_global> \
                C705 (<option:Dai.RNG32.addr.replay_unsafe_rng>+4) 00000000 \
                668901 \
            ",
            /*
                MOVZX EAX,WORD PTR [REPLAY_UNSAFE_RNG]
                MOV WORD PTR [ECX+2],AX
                MOV DWORD PTR [REPLAY_UNSAFE_RNG],EAX
                <nop:4>
                MOV AX,WORD PTR [CURRENT_STAGE_NUM]
                MOV DWORD PTR [REPLAY_UNSAFE_RNG+4],0
                MOV WORD PTR [ECX],AX
            */
        },
        "Dai.RNG32.init_state.replay_playback.0": {
            "addr": 0x45610B,
            "expected": "\
                0FB746 EE \
                66A3 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                0FB746 EE \
                B9 1C000000 \
                BF 28584F00 \
                66A3 <option:Dai.RNG32.addr.replay_safe_rng> \
            ",
            /*
                MOVZX EAX,WORD PTR [ESI-12]
                MOV WORD PTR [REPLAY_UNSAFE_RNG],AX
                MOVZX EAX,WORD PTR [ESI-12]
                MOV ECX,1C
                MOV EDI,4F5828
                MOV WORD PTR [REPLAY_SAFE_RNG],AX
            */
            "code": "\
                0FB746 EE \
                A3 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                B9 1C000000 \
                BF 28584F00 \
                <nop:11> \
            ",
            /*
                MOVZX EAX,WORD PTR [ESI-12]
                MOV DWORD PTR [REPLAY_UNSAFE_RNG],EAX
                MOV ECX,1C
                MOV EDI,4F5828
                <nop:11>
            */
        },
        "Dai.RNG32.init_state.replay_recording.1": {
            "addr": 0x454798,
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
            "addr": 0x454A3D,
            "expected": "\
                668B46 EE \
                66A3 <option:Dai.RNG32.addr.replay_unsafe_rng> \
            ",
            /*
                MOV AX,WORD PTR [ESI-12]
                MOV WORD PTR [REPLAY_UNSAFE_RNG],AX
            */
            "code": "\
                0FB746 EE \
                A3 <option:Dai.RNG32.addr.replay_unsafe_rng> \
                <nop:1> \
            ",
            /*
                MOVZX EAX,WORD PTR [ESI-12]
                MOV DWORD PTR [REPLAY_UNSAFE_RNG],EAX
                <nop:1>
            */
        },
        
        
        "Dai.RNG32.rand_word.replace_inlined.0a": {
            "addr": 0x409568,
            "expected": "8A15 15584F00 84D2 74 13 68 C0574F00",
            "code": "B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 59 <nop:3>"
        },
        "Dai.RNG32.rand_word.replace_inlined.0b": {
            "addr": 0x4095CD,
            "expected": "0FB7C1",
            "code": "0FB7C0"
        },
        "Dai.RNG32.rand_word.replace_inlined.1a": {
            "addr": 0x4095E1,
            "expected": "8A15 15584F00 84D2 74 13 68 C0574F00",
            "code": "B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 59 <nop:3>"
        },
        "Dai.RNG32.rand_word.replace_inlined.1b": {
            "addr": 0x409646,
            "expected": "0FB7C1",
            "code": "0FB7C0"
        },
        "Dai.RNG32.rand_word.replace_inlined.2a": {
            "addr": 0x40965A,
            "expected": "8A15 15584F00 84D2 74 13 68 C0574F00",
            "code": "B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 5A <nop:3>"
        },
        "Dai.RNG32.rand_word.replace_inlined.2b": {
            "addr": 0x4096C0,
            "expected": "0FB7C1",
            "code": "0FB7C0"
        },
        "Dai.RNG32.rand_word.replace_inlined.3": {
            "addr": 0x456B65,
            "expected": "8A15 15584F00 84D2 74 13 68 C0574F00",
            "code": "B9 <option:Dai.RNG32.addr.replay_unsafe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 57 <nop:3>"
        },
        "Dai.RNG32.rand_word.replace_inlined.4a": {
            "addr": 0x467970,
            "expected": "803D 15584F00 00 74 0D 68 C0574F00",
            "code": "B9 <option:Dai.RNG32.addr.replay_safe_rng> E8 [codecave:Dai.RNG32.rand_dword] EB 53 <nop:2>"
        },
        "Dai.RNG32.rand_word.replace_inlined.4b": {
            "addr": 0x4679CF,
            "expected": "66C1E9 09 888E E8994D00",
            "code": "C1E8 09 8886 E8994D00 <nop:1>"
        },
    },
}