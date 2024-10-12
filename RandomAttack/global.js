{
    "options": {
        "Dai.RandomAttack.player_invuln_frames_after_start_chapter": {
            // default: 30
            "type": "i32",
            "val": 30 
        },
        "Dai.RandomAttack.player_invuln_frames_after_reload_chapter": {
            // default: 80
            "type": "i32",
            "val": 80
        },
    },
    "codecaves": {
        "Dai.RandomAttack.pointdevice.enemy_ptr": {
            "access": "rw",
            "size": 4,
        },
        "Dai.RandomAttack.pointdevice.snapshot.enemy": {
            "access": "rw",
            "size": "<option:Dai.RandomAttack.struct_size.enemy>"//0x530C,
        },
        "Dai.RandomAttack.pointdevice.snapshot.player": {
            "access": "rw",
            "size": "<option:Dai.RandomAttack.struct_size.player>", 
        },
        "Dai.RandomAttack.pointdevice.snapshot.item_manager": {
            "access": "rw",
            "size": "<option:Dai.RandomAttack.struct_size.item_manager>"//"(0x1C5888 + (<option:bullet-cap.cancel-cap> * 0xC18))",
        },
        "Dai.RandomAttack.pointdevice.snapshot.bullet_manager": {
            "access": "rw",
            "size": "<option:Dai.RandomAttack.struct_size.bullet_manager>"//"(0x9C + (<option:bullet-cap.bullet-cap> * 0x13F4))",
        },
        "Dai.RandomAttack.pointdevice.snapshot.stage_background": {
            "access": "rw",
            "size": "<option:Dai.RandomAttack.struct_size.stage>"//0x43A0,
        },
        "Dai.RandomAttack.pointdevice.snapshot.globals": {
            "access": "rw",
            "size": "<option:Dai.RandomAttack.struct_size.copysafe_globals>", //0x70
        },
        "Dai.RandomAttack.pointdevice.snapshot.game_speed": {
            "access": "rw",
            "size": 4, 
        },
        
        "Dai.RandomAttack.pointdevice.snapshot_status": {
            "access": "rw",
            "size": 4, 
            //0 = no action, 1 = create snapshot, 2 = load snapshot
        },
        
        
        "Dai.RandomAttack.pointdevice.copy_struct_parts": {
            //arg1 = target, arg2 = source, arg3 = copy offsets array ptr
            "access": "re",
            /*
                PUSH EBP
                MOV EBP,ESP
                PUSH EBX
                PUSH ESI
                PUSH EDI
                MOV EBX,DWORD PTR [EBP+10] ;copy offsets array ptr
                MOV ESI,DWORD PTR [EBP+0C]  ;source
                MOV EDI,DWORD PTR [EBP+8]  ;target
            LOOP:
                MOV EAX,DWORD PTR [EBX];start offset (inclusive)
                TEST EAX,EAX
                JS END
                MOV ECX,DWORD PTR [EBX+4];end offset (exclusive)
                SUB ECX,EAX
                PUSH ECX
                MOV ECX,ESI ;source
                ADD ECX,EAX
                PUSH ECX
                MOV ECX,EDI ;target
                ADD ECX,EAX
                PUSH ECX
                CALL [th_memcpy]
                ADD ESP,0C
                ADD EBX,8
                JMP LOOP
            END:
                POP EDI
                POP ESI
                POP EBX
                MOV ESP,EBP
                POP EBP
                RET 0C
            */
            "code": "\
                55 \
                89E5 \
                53 \
                56 \
                57 \
                8B5D 10 \
                8B75 0C \
                8B7D 08 \
                <nop:1> \
                8B03 \
                85C0 \
                78 1D \
                8B4B04 \
                29C1 \
                51 \
                89F1 \
                01C1 \
                51 \
                89F9 \
                01C1 \
                51 \
                E8 [th_memcpy] \
                83C4 0C \
                83C3 08 \
                EB DD \
                5F \
                5E \
                5B \
                89EC \
                5D \
                C2 0C00 \
            "
        },
    }
}