{
    "options": {
        "bullet-cap.bullet-cap": {
            "type": "i32",
            "val": 10000
        },
        "bullet-cap.laser-cap": {
            "type": "i32",
            "val": 2048
        },
        "bullet-cap.cancel-cap": {
            "type": "i32",
            "val": 16384
        },
        "bullet-cap.anm-search-lag-spike-size": {
            "type": "i32",
            "val": 8192
        },
        
        // All the options below exist solely to make porting to other games easier, DO NOT CHANGE THEM.
        "Dai.RandomAttack.struct_size.enemy": {
            "type": "u32",
            "val": 0x530C
        },
        "Dai.RandomAttack.struct_size.player": {
            "type": "u32",
            "val": 0x184C0
        },
        "Dai.RandomAttack.struct_size.item_manager_vanilla": {
            "type": "u32",
            "val": 0xDDD888
        },
        "Dai.RandomAttack.struct_size.item": {
            "type": "u32",
            "val": 0xC18
        },
        "Dai.RandomAttack.vanilla_cancel_cap": {
            "type": "u32",
            "val": 0x1000
        },
        "Dai.RandomAttack.struct_size.item_manager": {
            "type": "u32",
            "val": "(<option:Dai.RandomAttack.struct_size.item_manager_vanilla> - (<option:Dai.RandomAttack.struct_size.item>*<option:Dai.RandomAttack.vanilla_cancel_cap>) + (<option:Dai.RandomAttack.struct_size.item>*<option:bullet-cap.cancel-cap>))"
        },
        "Dai.RandomAttack.struct_size.bullet_manager_vanilla": {
            "type": "u32",
            "val": 0x9BF6D0
        },
        "Dai.RandomAttack.struct_size.bullet": {
            "type": "u32",
            "val": 0x13F4
        },
        "Dai.RandomAttack.vanilla_bullet_cap": {
            "type": "u32",
            "val": 2000
        },
        "Dai.RandomAttack.struct_size.bullet_manager": {
            "type": "u32",
            "val": "(<option:Dai.RandomAttack.struct_size.bullet_manager_vanilla> - (<option:Dai.RandomAttack.struct_size.bullet>*(<option:Dai.RandomAttack.vanilla_bullet_cap>+1)) + (<option:Dai.RandomAttack.struct_size.bullet>*(<option:bullet-cap.bullet-cap>+1)))"
        },
        "Dai.RandomAttack.struct_size.stage": {
            "type": "u32",
            "val": 0x43A0
        },
        "Dai.RandomAttack.struct_size.copysafe_globals": {
            "type": "u32",
            "val": 0x70
        },
        
        "Dai.RandomAttack.struct_offset.AnmVm.unused_for_delete_on_reload_flag": {
            "type": "u32",
            "val": 0x4A4
        },
        
        "Dai.RandomAttack.addr.global.player_ptr": {
            "type": "u32",
            "val": 0x4DB67C
        },
        "Dai.RandomAttack.addr.global.item_manager_ptr": {
            "type": "u32",
            "val": 0x4DB660
        },
        "Dai.RandomAttack.addr.global.bullet_manager_ptr": {
            "type": "u32",
            "val": 0x4DB530
        },
        "Dai.RandomAttack.addr.global.stage_ptr": {
            "type": "u32",
            "val": 0x4DB528
        },
        "Dai.RandomAttack.addr.global.copysafe_globals": {
            "type": "u32",
            "val": 0x4F5828
        },
        "Dai.RandomAttack.addr.global.game_speed": {
            "type": "u32",
            "val": 0x4D8F58
        },
        "Dai.RandomAttack.addr.global.enemy_manager_ptr": {
            "type": "u32",
            "val": 0x4DB544
        },
        "Dai.RandomAttack.struct_offset.EnemyManager.enemy_list_head": {
            "type": "u32",
            "val": 0xD0
        },
        "Dai.RandomAttack.struct_offset.Enemy.flags_with_no_delete_on_reload_flag": {
            "type": "u32",
            "val": 0x5244
        },
        "Dai.RandomAttack.enemy_no_delete_on_reload_flag": {
            "type": "u32",
            "val": 0x2000
        },
        "Dai.RandomAttack.struct_offset.Enemy.vtable.destructor": {
            "type": "u32",
            "val": 0x14
        },
    },
    "binhacks": {
        "Dai.RandomAttack.pointdevice.jmp_to_custom_ecl_ins_cave": {
            "addr": 0x4252DA,
            "expected": "0F87 [0x429C28]",
            "code": "0F87 [codecave:Dai.RandomAttack.pointdevice.custom_ecl_ins]"
        },
        "Dai.RandomAttack.pointdevice.jmp_to_custom_anm_ins_cave": {
            "addr": 0x4728D3,
            "expected": "0F87 [0x472AB9]",
            "code": "0F87 [codecave:Dai.RandomAttack.pointdevice.custom_anm_ins]"
        },
        "Dai.RandomAttack.pointdevice.replace_on_player_death_func": {
            "addr": 0x44DD91,
            "expected": "E8 [0x44F5E0]",
            "code": "E8 [codecave:Dai.RandomAttack.pointdevice.on_player_death]"
        },
        "Dai.RandomAttack.pointdevice.check_snapshot_status.jmp": {
            "addr": 0x436D18,
            "expected": "5F 5E B8 01000000 5B 8BE5 5D C3 <int3:5>",
            "code": "E9 [codecave:Dai.RandomAttack.pointdevice.check_snapshot_status] 5F 5E B8 01000000 5B 8BE5 5D C3",
        },
        "Dai.RandomAttack.pointdevice.dont_display_spell_failed_popups_if_reload.jmp": {
            "addr": 0x41D4B3,
            "expected": "0F84 CB000000",
            "code": "0F84 [codecave:Dai.RandomAttack.pointdevice.dont_display_spell_failed_popups_if_reload]"
        },
        "Dai.RandomAttack.pointdevice.dont_reset_stage_camera_vec3_104_if_reload.jmp": {
            "addr": 0x40D9DF,
            "expected": "F30F7E4424 3C 660FD686 78430000 C74424 44 00000000 8B4424 44 8986 80430000",
            "code": "C74424 44 00000000 E9 [codecave:Dai.RandomAttack.pointdevice.dont_reset_stage_camera_vec3_104_if_reload] <int3:19>"
        },
        "Dai.RandomAttack.pointdevice.make_unused_anm_vm_field_available": {
            "addr": 0x470F71,
            "expected": "8B87 4C050000 8987 A4040000",
            "code": "<nop:12>"
        },
        
        "Dai.RandomAttack.freeze_item_cycle": {
            "addr": 0x439844,
            "expected": "8B1D 94584F00 43",
            "code": "BB 01000000 <nop:2>"
        },
        "Dai.RandomAttack.replace_life_piece.jmp": {
            "addr": 0x4397BB,
            "expected": "8B5D 08 56 57",
            "code": "E9 [codecave:Dai.RandomAttack.replace_life_piece]"
        },
        "Dai.RandomAttack.fix_anm_effect_7_memory_leak": {
            "addr": 0x408523,
            "expected": "EB 0B 8360 18 FE C740 28 00000000 83C6 04 4F 75 DE 5F 5E 33C0 5B C3 <int3:1>",
            "code": "EB 0C 8360 18 FE 8360 1C DF 8348 1C 20 83C6 04 4F 75 DD 5F 5E 31C0 5B C3"
        },
        "Dai.RandomAttack.disable_sprite_transform_for_laser_line": {
            "addr": 0x43B3C3,
            "expected": "8B4C24 14 8DB7 14090000",
            "code": "E9 [0x43B263] <nop:5>"
        },
        "Dai.RandomAttack.disable_sprite_transform_for_laser_curve": {
            "addr": 0x442195,
            "expected": "8B4C24 14",
            "code": "EB 3E <nop:2>"
        },
        
        "Dai.RandomAttack.unlock_all": {
            "addr": 0x4595FF,
            "expected": "A1 A4B64D00 8B40 0C 8348 04 02 C705 C87A4F00 01000000 33C0 C3 <int3:5>",
            "code": "E9 [codecave:Dai.RandomAttack.unlock_all.cave] A1 A4B64D00 8B40 0C 8348 04 02 C705 C87A4F00 01000000 33C0 C3"
        },
        
    },
    "codecaves": {
        "Dai.RandomAttack.pointdevice.copyable_struct_parts.enemy": {
            "access": "r",
            "code": "\
                (0x4) (0x11CC) \
                (0x11D0) (0x1314) \
                (0x1454) (0x1458) \
                (0x1468) (0x146C) \
                (0x1470) (0x14D8) \
                (0x14E8) (0x524C) \
                (0x5254) (0x52DC) \
                (0x52F8) (0x530C) \
                FFFFFFFF FFFFFFFF \
            "
        },
        "Dai.RandomAttack.pointdevice.copyable_struct_parts.player": {
            "access": "r",
            "code": "\
                (0x5E0) (0x5F4) \
                FFFFFFFF FFFFFFFF \
            "
        },
        "Dai.RandomAttack.pointdevice.copyable_struct_parts.item_manager": {
            "access": "r",
            "code": "\
                (0x10) (<option:Dai.RandomAttack.struct_size.item_manager>) \
                FFFFFFFF FFFFFFFF \
            "
        },
        "Dai.RandomAttack.pointdevice.copyable_struct_parts.bullet_manager": {
            "access": "r",
            "code": "\
                (0x10) (<option:Dai.RandomAttack.struct_size.bullet_manager> - 4) \
                FFFFFFFF FFFFFFFF \
            "
        },
        "Dai.RandomAttack.pointdevice.copyable_struct_parts.stage_background": {
            "access": "r",
            "code": "\
                (0x20) (0x204) \
                (0x20C) (0x3090) \
                (0x4274) (0x43A0) \
                FFFFFFFF FFFFFFFF \
            "
        },
        "Dai.RandomAttack.pointdevice.copyable_struct_parts.globals": {
            "access": "r",
            "code": "\
                (0x0) (0x70) \
                FFFFFFFF FFFFFFFF \
            "
        },
        
        "Dai.RandomAttack.pointdevice.set_player_invuln": {
            "access": "re",
            /*
                MOV EAX,DWORD PTR [PLAYER_PTR]
                PUSH DWORD PTR [ESP+4]
                LEA ECX,[EAX+182C0] ;player invuln timer
                CALL [0x408B00]
                RET 4
            */
            "code": "\
                A1 <option:Dai.RandomAttack.addr.global.player_ptr> \
                FF7424 04 \
                8D88 C0820100 \
                E8 [0x408B00] \
                C2 0400 \
            "
        },
        
        "Dai.RandomAttack.pointdevice.custom_ecl_ins": {
            //ins 2000 createSnapshot() - Save pointer to caller enemy, queue snapshot creation
            "access": "re",
            /*
                CMP EAX,6A4 ;2000 - 300
                JNE [0x429C28]
                MOV ECX,DWORD PTR [EDI+40EC] ;enemy begin ptr
                MOV DWORD PTR [<codecave:Dai.RandomAttack.pointdevice.enemy_ptr>],ECX  ;save pointer to caller enemy
                MOV DWORD PTR [<codecave:Dai.RandomAttack.pointdevice.snapshot_status>],1 ;queue create snapshot
                
                MOV ECX,DWORD PTR [PLAYER_PTR]
                ;unkill player
                CMP DWORD PTR [ECX+684],4 ; player state
                JNE SHORT LN0
                CALL [0x44F900] ;cancel_impeding_death
            LN0:
                ;give invuln
                PUSH player_invuln_frames_after_start_chapter
                CALL [set_player_invuln]
                JMP [0x429C28]
            */
            "code": "\
                3D A4060000 \
                0F85 [0x429C28] \
                8B8F EC400000 \
                890D <codecave:Dai.RandomAttack.pointdevice.enemy_ptr> \
                C705 <codecave:Dai.RandomAttack.pointdevice.snapshot_status> 01000000 \
                8B0D <option:Dai.RandomAttack.addr.global.player_ptr> \
                83B9 84060000 04 \
                75 05 \
                E8 [0x44F900] \
                68 <option:Dai.RandomAttack.player_invuln_frames_after_start_chapter> \
                E8 [codecave:Dai.RandomAttack.pointdevice.set_player_invuln] \
                E9 [0x429C28]\
            "
        },
        "Dai.RandomAttack.pointdevice.on_player_death": {
            //unkill player, give iframes to player, create reload screen effect, queue snapshot reload
            "access": "re",
            /*
                ;unkill player
                MOV DWORD PTR [ECX+684],1 ;set player state
                
                ;give player invuln
                PUSH player_invuln_frames_after_reload_chapter
                CALL [set_player_invuln]
                
                ;create reload anm effect
                SUB ESP,4 
                LEA EAX,[ESP]
                PUSH ECX    ;arg4 unused
                PUSH -1     ;arg3 layer (-1 = don't set)
                MOV ECX,DWORD PTR [EFFECT_MANAGER_PTR]
                PUSH 0C4    ;arg2 script id
                MOV ECX,DWORD PTR [ECX+10]  ;zAnmLoaded: effect.anm
                PUSH EAX    ;arg1 anm id return ptr
                CALL [0x42DF70] ;create vm world back
                ADD ESP,4
                
                ;queue reload snapshot
                MOV DWORD PTR [<codecave:Dai.RandomAttack.pointdevice.snapshot_status>],2 
                RET
            */
            "code": "\
                C781 84060000 01000000 \
                \
                68 <option:Dai.RandomAttack.player_invuln_frames_after_reload_chapter> \
                E8 [codecave:Dai.RandomAttack.pointdevice.set_player_invuln] \
                \
                83EC 04 \
                8D04E4 \
                51 \
                6A FF \
                8B0D <0x4DB53C> \
                68 C4000000 \
                8B49 10 \
                50 \
                E8 [0x42DF70] \
                83C4 04 \
                \
                C705 <codecave:Dai.RandomAttack.pointdevice.snapshot_status> 02000000 \
                C3 \
            "
        },
        
        "Dai.RandomAttack.pointdevice.check_snapshot_status": {
            "access": "re",
            /*
                MOV EAX,DWORD PTR [<codecave:Dai.RandomAttack.pointdevice.snapshot_status>]
                CMP EAX,0
                JE [0x436D1D]
                CMP EAX,1 ;create snapshot
                JNE LN0
                CALL [codecave:Dai.RandomAttack.pointdevice.create_snapshot]
                JMP SHORT LN1
            LN0:
                CMP EAX,2 ;load snapshot
                JNE LN1
                CALL [codecave:Dai.RandomAttack.pointdevice.load_snapshot]
                MOV EAX,3 ;snapshot was reloaded this tick
                JMP SHORT LN2
            LN1:
                XOR EAX,EAX
            LN2:
                MOV DWORD PTR [<codecave:Dai.RandomAttack.pointdevice.snapshot_status>],EAX
                JMP [0x436D1D]
            */
            "code": "\
                A1 <codecave:Dai.RandomAttack.pointdevice.snapshot_status> \
                83F8 00 \
                0F84 [0x436D1D] \
                83F8 01 \
                75 07 \
                E8 [codecave:Dai.RandomAttack.pointdevice.create_snapshot] \
                EB 11 \
                \
                83F8 02 \
                75 0C \
                E8 [codecave:Dai.RandomAttack.pointdevice.load_snapshot] \
                B8 03000000 \
                EB 02 \
                \
                31C0 \
                \
                A3 <codecave:Dai.RandomAttack.pointdevice.snapshot_status> \
                E9 [0x436D1D] \
            "
        },
        "Dai.RandomAttack.pointdevice.create_snapshot": {
            "access": "re",
            /*
                PUSH ESI
                PUSH EDI
                MOV ESI,DWORD PTR [<codecave:Dai.RandomAttack.pointdevice.enemy_ptr>]
                ;free async ecl list
                MOV ECX,ESI
                CALL [codecave:Dai.RandomAttack.pointdevice.ecl_free_async_context_list]
                
                ;snapshot saved enemy
                PUSH <codecave:Dai.RandomAttack.pointdevice.copyable_struct_parts.enemy>
                PUSH ESI
                PUSH <codecave:Dai.RandomAttack.pointdevice.snapshot.enemy>
                CALL [codecave:Dai.RandomAttack.pointdevice.copy_struct_parts]
                
                ;snapshot player
                PUSH <codecave:Dai.RandomAttack.pointdevice.copyable_struct_parts.player>
                PUSH DWORD PTR [PLAYER_PTR]
                PUSH <codecave:Dai.RandomAttack.pointdevice.snapshot.player>
                CALL [codecave:Dai.RandomAttack.pointdevice.copy_struct_parts]
                
                ;snapshot item manager
                PUSH <codecave:Dai.RandomAttack.pointdevice.copyable_struct_parts.item_manager>
                PUSH DWORD PTR [ITEM_MANAGER_PTR]
                PUSH <codecave:Dai.RandomAttack.pointdevice.snapshot.item_manager>
                CALL [codecave:Dai.RandomAttack.pointdevice.copy_struct_parts]
                
                ;snapshot bullet manager
                PUSH <codecave:Dai.RandomAttack.pointdevice.copyable_struct_parts.bullet_manager>
                PUSH DWORD PTR [BULLET_MANAGER_PTR]
                PUSH <codecave:Dai.RandomAttack.pointdevice.snapshot.bullet_manager>
                CALL [codecave:Dai.RandomAttack.pointdevice.copy_struct_parts]
                
                ;snapshot stage background
                PUSH <codecave:Dai.RandomAttack.pointdevice.copyable_struct_parts.stage_background>
                PUSH DWORD PTR [STAGE_PTR]
                PUSH <codecave:Dai.RandomAttack.pointdevice.snapshot.stage_background>
                CALL [codecave:Dai.RandomAttack.pointdevice.copy_struct_parts]
                
                ;snapshot globals
                PUSH <codecave:Dai.RandomAttack.pointdevice.copyable_struct_parts.globals>
                PUSH GLOBALS
                PUSH <codecave:Dai.RandomAttack.pointdevice.snapshot.globals>
                CALL [codecave:Dai.RandomAttack.pointdevice.copy_struct_parts]
                
                ;snapshot game speed
                MOV EAX,DWORD PTR [GAME_SPEED]
                MOV DWORD PTR [<codecave:Dai.RandomAttack.pointdevice.snapshot.game_speed>],EAX
                
                POP EDI
                POP ESI
                RET
            */
            "code": "\
                56 \
                57 \
                8B35 <codecave:Dai.RandomAttack.pointdevice.enemy_ptr> \
                89F1 \
                E8 [codecave:Dai.RandomAttack.pointdevice.ecl_free_async_context_list] \
                \
                68 <codecave:Dai.RandomAttack.pointdevice.copyable_struct_parts.enemy> \
                56 \
                68 <codecave:Dai.RandomAttack.pointdevice.snapshot.enemy> \
                E8 [codecave:Dai.RandomAttack.pointdevice.copy_struct_parts] \
                \
                68 <codecave:Dai.RandomAttack.pointdevice.copyable_struct_parts.player> \
                FF35 <option:Dai.RandomAttack.addr.global.player_ptr> \
                68 <codecave:Dai.RandomAttack.pointdevice.snapshot.player> \
                E8 [codecave:Dai.RandomAttack.pointdevice.copy_struct_parts] \
                \
                68 <codecave:Dai.RandomAttack.pointdevice.copyable_struct_parts.item_manager> \
                FF35 <option:Dai.RandomAttack.addr.global.item_manager_ptr> \
                68 <codecave:Dai.RandomAttack.pointdevice.snapshot.item_manager> \
                E8 [codecave:Dai.RandomAttack.pointdevice.copy_struct_parts] \
                \
                68 <codecave:Dai.RandomAttack.pointdevice.copyable_struct_parts.bullet_manager> \
                FF35 <option:Dai.RandomAttack.addr.global.bullet_manager_ptr> \
                68 <codecave:Dai.RandomAttack.pointdevice.snapshot.bullet_manager> \
                E8 [codecave:Dai.RandomAttack.pointdevice.copy_struct_parts] \
                \
                68 <codecave:Dai.RandomAttack.pointdevice.copyable_struct_parts.stage_background> \
                FF35 <option:Dai.RandomAttack.addr.global.stage_ptr> \
                68 <codecave:Dai.RandomAttack.pointdevice.snapshot.stage_background> \
                E8 [codecave:Dai.RandomAttack.pointdevice.copy_struct_parts] \
                \
                68 <codecave:Dai.RandomAttack.pointdevice.copyable_struct_parts.globals> \
                68 <option:Dai.RandomAttack.addr.global.copysafe_globals> \
                68 <codecave:Dai.RandomAttack.pointdevice.snapshot.globals> \
                E8 [codecave:Dai.RandomAttack.pointdevice.copy_struct_parts] \
                \
                A1 <option:Dai.RandomAttack.addr.global.game_speed> \
                A3 <codecave:Dai.RandomAttack.pointdevice.snapshot.game_speed> \
                \
                5F \
                5E \
                C3 \
            ",
        },
        "Dai.RandomAttack.pointdevice.load_snapshot": {
            "access": "re",
            /*
                PUSH ESI
                PUSH EDI
                PUSH EBX
                MOV ESI,DWORD PTR [<codecave:Dai.RandomAttack.pointdevice.enemy_ptr>]
                ;delete enemies (unless flag 0x2000 is set)
                MOV EAX,DWORD PTR [ENEMY_MANAGER_PTR]
                MOV EDI,DWORD PTR [EAX+0D0] ;enemy list head
            LN0:
                TEST EDI,EDI
                JZ SHORT LN1
                MOV ECX,DWORD PTR [EDI] ;list->entry
                MOV EBX,DWORD PTR [EDI+4] ;list->next
                TEST ECX,ECX
                JZ SHORT ENM_NO_DELETE
                CMP ECX,ESI ;if equal to saved enemy
                JE ENM_NO_DELETE
                TEST DWORD PTR [ECX+5244],0x2000 ;enemy->flags_lo
                JNZ SHORT ENM_NO_DELETE
                MOV EAX,DWORD PTR [ECX] ;enemy->vtable
                PUSH 1
                CALL DWORD PTR [EAX+14] ;vtable->destructor
                ENM_NO_DELETE:
                MOV EDI,EBX
                JMP SHORT LN0
            LN1:
            
                ;delete lasers
                PUSH 0
                PUSH 1
                CALL [0x43AC00]
                
                ;end spell
                CALL [0x41D450]
                
                ;restore saved enemy
                PUSH <codecave:Dai.RandomAttack.pointdevice.copyable_struct_parts.enemy>
                PUSH <codecave:Dai.RandomAttack.pointdevice.snapshot.enemy>
                PUSH ESI
                CALL [codecave:Dai.RandomAttack.pointdevice.copy_struct_parts]
                
                ;restore player
                PUSH <codecave:Dai.RandomAttack.pointdevice.copyable_struct_parts.player>
                PUSH <codecave:Dai.RandomAttack.pointdevice.snapshot.player>
                PUSH DWORD PTR [PLAYER_PTR]
                CALL [codecave:Dai.RandomAttack.pointdevice.copy_struct_parts]
                
                ;restore item manager
                
                PUSH <codecave:Dai.RandomAttack.pointdevice.copyable_struct_parts.item_manager>
                PUSH <codecave:Dai.RandomAttack.pointdevice.snapshot.item_manager>
                PUSH DWORD PTR [ITEM_MANAGER_PTR]
                CALL [codecave:Dai.RandomAttack.pointdevice.copy_struct_parts]
                
                ;restore bullet manager
                
                PUSH <codecave:Dai.RandomAttack.pointdevice.copyable_struct_parts.bullet_manager>
                PUSH <codecave:Dai.RandomAttack.pointdevice.snapshot.bullet_manager>
                PUSH DWORD PTR [BULLET_MANAGER_PTR]
                CALL [codecave:Dai.RandomAttack.pointdevice.copy_struct_parts]
                
                ;restore stage background
                SUB ESP,0C
                MOV ESI,DWORD PTR [STAGE_PTR]
                MOVQ XMM0,QWORD PTR [ESI+4274]
                MOVQ QWORD PTR [ESP],XMM0
                MOV EAX,DWORD PTR [ESI+427C]
                MOV DWORD PTR [ESP+8],EAX
                PUSH <codecave:Dai.RandomAttack.pointdevice.copyable_struct_parts.stage_background>
                PUSH <codecave:Dai.RandomAttack.pointdevice.snapshot.stage_background>
                PUSH ESI
                CALL [codecave:Dai.RandomAttack.pointdevice.copy_struct_parts]
                MOVSS XMM0,DWORD PTR [ESI+4274]
                SUBSS XMM0,DWORD PTR [ESP]
                MOVSS DWORD PTR [ESI+4378],XMM0
                MOVSS XMM0,DWORD PTR [ESI+4278]
                SUBSS XMM0,DWORD PTR [ESP+4]
                MOVSS DWORD PTR [ESI+437C],XMM0
                MOVSS XMM0,DWORD PTR [ESI+427C]
                SUBSS XMM0,DWORD PTR [ESP+8]
                MOVSS DWORD PTR [ESI+4380],XMM0
                ADD ESP,0C
                
                ;restore globals
                PUSH <codecave:Dai.RandomAttack.pointdevice.copyable_struct_parts.globals>
                PUSH <codecave:Dai.RandomAttack.pointdevice.snapshot.globals>
                PUSH GLOBALS
                CALL [codecave:Dai.RandomAttack.pointdevice.copy_struct_parts]
                
                ;restore game speed
                MOV EAX,DWORD PTR [<codecave:Dai.RandomAttack.pointdevice.snapshot.game_speed>]
                MOV DWORD PTR [GAME_SPEED],EAX
                
                ;repopulate player options
                MOV ECX,DWORD PTR [PLAYER_PTR]
                CALL [0x44F970]
                
                ;force gui update
                MOV ECX,DWORD PTR [GUI_PTR]
                PUSH DWORD PTR [4F5874]
                PUSH DWORD PTR [4F5870]
                CALL [0x434FD0]
                
                ;remove vms with delete_on_reload flag set
                MOV ECX,DWORD PTR [ANM_MANAGER_PTR]
                CALL [codecave:Dai.RandomAttack.pointdevice.remove_vms_with_flag_set]
                
                POP EBX
                POP EDI
                POP ESI
                RET
            */
            "code": "\
                56 \
                57 \
                53 \
                8B35 <codecave:Dai.RandomAttack.pointdevice.enemy_ptr> \
                A1 <option:Dai.RandomAttack.addr.global.enemy_manager_ptr> \
                8BB8 D0000000 \
                85FF \
                74 24 \
                8B0F \
                8B5F 04 \
                85C9 \
                74 17 \
                39F1 \
                74 13 \
                F781 44520000 00200000 \
                75 07 \
                8B01 \
                6A 01 \
                FF50 14 \
                89DF \
                EB D8 \
                \
                6A 00 \
                6A 01 \
                E8 [0x43AC00] \
                \
                E8 [0x41D450] \
                \
                68 <codecave:Dai.RandomAttack.pointdevice.copyable_struct_parts.enemy> \
                68 <codecave:Dai.RandomAttack.pointdevice.snapshot.enemy> \
                56 \
                E8 [codecave:Dai.RandomAttack.pointdevice.copy_struct_parts] \
                \
                68 <codecave:Dai.RandomAttack.pointdevice.copyable_struct_parts.player> \
                68 <codecave:Dai.RandomAttack.pointdevice.snapshot.player> \
                FF35 <option:Dai.RandomAttack.addr.global.player_ptr> \
                E8 [codecave:Dai.RandomAttack.pointdevice.copy_struct_parts] \
                \
                68 <codecave:Dai.RandomAttack.pointdevice.copyable_struct_parts.item_manager> \
                68 <codecave:Dai.RandomAttack.pointdevice.snapshot.item_manager> \
                FF35 <option:Dai.RandomAttack.addr.global.item_manager_ptr> \
                E8 [codecave:Dai.RandomAttack.pointdevice.copy_struct_parts] \
                \
                68 <codecave:Dai.RandomAttack.pointdevice.copyable_struct_parts.bullet_manager> \
                68 <codecave:Dai.RandomAttack.pointdevice.snapshot.bullet_manager> \
                FF35 <option:Dai.RandomAttack.addr.global.bullet_manager_ptr> \
                E8 [codecave:Dai.RandomAttack.pointdevice.copy_struct_parts] \
                \
                83EC 0C \
                8B35 <option:Dai.RandomAttack.addr.global.stage_ptr> \
                F30F7E86 74420000 \
                660FD60424 \
                8B86 7C420000 \
                894424 08 \
                68 <codecave:Dai.RandomAttack.pointdevice.copyable_struct_parts.stage_background> \
                68 <codecave:Dai.RandomAttack.pointdevice.snapshot.stage_background> \
                56 \
                E8 [codecave:Dai.RandomAttack.pointdevice.copy_struct_parts] \
                F30F1086 74420000 \
                F30F5C0424 \
                F30F1186 78430000 \
                F30F1086 78420000 \
                F30F5C4424 04 \
                F30F1186 7C430000 \
                F30F1086 7C420000 \
                F30F5C4424 08 \
                F30F1186 80430000 \
                83C4 0C \
                \
                68 <codecave:Dai.RandomAttack.pointdevice.copyable_struct_parts.globals> \
                68 <codecave:Dai.RandomAttack.pointdevice.snapshot.globals> \
                68 <option:Dai.RandomAttack.addr.global.copysafe_globals> \
                E8 [codecave:Dai.RandomAttack.pointdevice.copy_struct_parts] \
                \
                A1 <codecave:Dai.RandomAttack.pointdevice.snapshot.game_speed> \
                A3 <option:Dai.RandomAttack.addr.global.game_speed> \
                \
                8B0D <option:Dai.RandomAttack.addr.global.player_ptr> \
                E8 [0x44F970] \
                \
                8B0D <0x4DB550> \
                FF35 <0x4F5874> \
                FF35 <0x4F5870> \
                E8 [0x434FD0] \
                \
                8B0D <0x4F56CC> \
                E8 [codecave:Dai.RandomAttack.pointdevice.remove_vms_with_flag_set] \
                \
                5B \
                5F \
                5E \
                C3 \
            ",
        },
        
        "Dai.RandomAttack.pointdevice.ecl_free_async_context_list": {
            "access": "re",
            /*
                PUSH EBX
                PUSH EDI
                PUSH ESI
                MOV EBX,ECX
                MOV ESI,DWORD PTR [EBX+11D4] ;enemy.ecl_vm.async_list_head.next
                TEST ESI,ESI
                JE LN1
                <nop:1>
            LN0:
                MOV EDI,DWORD PTR [ESI+4] async_list->next
                PUSH DWORD PTR [ESI]
                CALL free
                ADD ESP,4
                PUSH ESI
                CALL free
                ADD ESP,4
                MOV ESI,EDI
                TEST EDI,EDI
                JNE LN0
            LN1:
                XOR EAX,EAX
                MOV DWORD PTR [EBX+11D4],EAX ;enemy.ecl_vm.async_list_head.next
                MOV DWORD PTR [EBX+11D8],EAX ;enemy.ecl_vm.async_list_head.prev
                MOV DWORD PTR [EBX+11DC],EAX ;enemy.ecl_vm.async_list_head.__seldom_used
                POP ESI
                POP EDI
                POP EBX
                RET
            */
            "code": "\
                53 \
                57 \
                56 \
                89CB \
                8BB3 D4110000 \
                85F6 \
                74 1D \
                <nop:1> \
                8B7E 04 \
                FF36 \
                E8 [th_free] \
                83C4 04 \
                56 \
                E8 [th_free] \
                83C4 04 \
                89FE \
                85FF \
                75 E4 \
                31C0 \
                8983 D4110000 \
                8983 D8110000 \
                8983 DC110000 \
                5E \
                5F \
                5B \
                C3 \
            "
        },
        
        "Dai.RandomAttack.pointdevice.dont_display_spell_failed_popups_if_reload": {
            "access": "re",
            /*
                CMP DWORD PTR [snapshot_status],2
                JE 0x41D5A1
                JMP 0x41D584
            */
            "code": "\
                833D <codecave:Dai.RandomAttack.pointdevice.snapshot_status> 02 \
                0F84 [0x41D5A1] \
                E9 [0x41D584]\
            ",
        },
        
        "Dai.RandomAttack.pointdevice.dont_reset_stage_camera_vec3_104_if_reload": {
            "access": "re",
            /*
                CMP DWORD PTR [snapshot_status],3
                JE 0x40D9FF
                MOVQ XMM0,QWORD PTR [ESP+3C]
                MOVQ QWORD PTR [ESI+4378],XMM0
                MOV EAX,DWORD PTR [ESP+44]
                MOV DWORD PTR [ESI+4380],EAX
                JMP 0x40D9FF
            */
            "code": "\
                833D <codecave:Dai.RandomAttack.pointdevice.snapshot_status> 03 \
                0F84 [0x40D9FF] \
                F30F7E4424 3C \
                660FD686 78430000 \
                8B4424 44 \
                8986 80430000 \
                E9 [0x40D9FF]\
            ",
        },
        
        "Dai.RandomAttack.pointdevice.custom_anm_ins": {
            //ins 2000 deleteOnReload() - sets a flag that causes the anm VM to delete itself upon reload
            "access": "re",
            /*
                CMP EAX,577 ;2000 - 601
                JNE [0x472AB9]
                MOV EAX,DWORD PTR [EBX+8]   ;arg 1
                MOV DWORD PTR [EDI+4A4],EAX ;repurposed unused field
                JMP [0x472AB9]
            */
            "code": "\
                3D 77050000 \
                0F85 [0x472AB9] \
                8B43 08 \
                8987 <option:Dai.RandomAttack.struct_offset.AnmVm.unused_for_delete_on_reload_flag> \
                E9 [0x472AB9] \
            "
        },
        "Dai.RandomAttack.pointdevice.remove_vms_with_flag_set": {
            //flag set by ins 2000 deleteOnReload
            "access": "re",
            /*
                MOV EAX,DWORD PTR [ECX+0FE8208] ;zAnmManager->world list
            WORLD_LOOP:
                TEST EAX,EAX
                JZ SHORT WORLD_END
                MOV EDX,DWORD PTR [EAX]     ;list->entry
                TEST EDX,EDX
                JZ SHORT WORLD_NEXT
                CMP DWORD PTR [EDX+4A4],1   ;check value set by deleteOnReload
                JNE SHORT WORLD_NEXT
                OR DWORD PTR [EDX+1C],20    ;set deletion flag
            WORLD_NEXT:
                MOV EAX,DWORD PTR [EAX+4]   ;list->next
                JMP SHORT WORLD_LOOP
            WORLD_END:
                ;UI VMs
                MOV EAX,DWORD PTR [ECX+0FE8210] ;zAnmManager->ui list
            UI_LOOP:
                TEST EAX,EAX
                JZ SHORT FUNC_END
                MOV EDX,DWORD PTR [EAX]
                TEST EDX,EDX
                JZ SHORT UI_NEXT
                CMP DWORD PTR [EDX+4A4],1   ;check value set by deleteOnReload
                JNE SHORT UI_NEXT
                OR DWORD PTR [EDX+1C],20    ;set deletion flag
            UI_NEXT:
                MOV EAX,DWORD PTR [EAX+4]   ;list->next
                JMP SHORT UI_LOOP
            UI_END:
                RET
            */
            "code": "\
                8B81 0882FE00 \
                85C0 \
                74 18 \
                8B10 \
                85D2 \
                74 0D \
                83BA <option:Dai.RandomAttack.struct_offset.AnmVm.unused_for_delete_on_reload_flag> 01 \
                75 04 \
                834A 1C 20 \
                8B40 04 \
                EB E4 \
                8B81 1082FE00 \
                85C0 \
                74 18 \
                8B10 \
                85D2 \
                74 0D \
                83BA <option:Dai.RandomAttack.struct_offset.AnmVm.unused_for_delete_on_reload_flag> 01 \
                75 04 \
                834A 1C 20 \
                8B40 04 \
                EB E4 \
                C3 \
            "
        },
        
        "Dai.RandomAttack.replace_life_piece": {
            "access": "re",
            /*
                MOV EBX,DWORD PTR [EBP+8]
                PUSH ESI
                PUSH EDI
                CMP EBX,4
                JNE [0x4397C0]
                SUB ESP,8
                MOV EDI,ESP
                MOV ESI,DWORD PTR [EBP+0C]
                MOVSS XMM0,DWORD PTR [ESI]
                ADDSS XMM0,DWORD PTR [float:24]
                MOVSS DWORD PTR [EDI],XMM0
                MOVSS XMM0,DWORD PTR [ESI+4]
                MOVSS DWORD PTR [EDI+4],XMM0
                PUSH 0
                SUB ESP,0C
                MOV DWORD PTR [ESP+8],400CCCCD
                MOV DWORD PTR [ESP+4],BFC90FDB
                PUSH EDI
                PUSH 6
                CALL 004397B0
                MOVSS XMM0,DWORD PTR [ESI]
                SUBSS XMM0,DWORD PTR [float:24]
                MOVSS DWORD PTR [EDI],XMM0
                PUSH 0
                SUB ESP,0C
                MOV DWORD PTR [ESP+8],400CCCCD
                MOV DWORD PTR [ESP+4],BFC90FDB
                PUSH EDI
                PUSH 6
                CALL 004397B0
                MOVSS XMM0,DWORD PTR [ESI]
                MOVSS DWORD PTR [EDI],XMM0
                MOVSS XMM0,DWORD PTR [ESI+4]
                SUBSS XMM0,DWORD PTR [float:24]
                MOVSS DWORD PTR [EDI+4],XMM0
                PUSH 0
                SUB ESP,0C
                MOV DWORD PTR [ESP+8],400CCCCD
                MOV DWORD PTR [ESP+4],BFC90FDB
                PUSH EDI
                PUSH 6
                CALL 004397B0
                ADD ESP,8
                JMP [0x43995A]
            */
            "code": "\
                8B5D 08 \
                56 \
                57 \
                83FB 04 \
                0F85 [0x4397C0] \
                83EC 08 \
                89E7 \
                8B75 0C \
                F30F1006 \
                F30F5805 {f32:24.0} \
                F30F1107 \
                F30F1046 04 \
                F30F1147 04 \
                6A 00 \
                83EC 0C \
                C74424 08 \
                CDCC0C40 \
                C74424 04 \
                DB0FC9BF \
                57 \
                6A 06 \
                E8 [0x4397B0] \
                F30F1006 \
                F30F5C05 {f32:24.0} \
                F30F1107 \
                6A 00 \
                83EC 0C \
                C74424 08 \
                CDCC0C40 \
                C74424 04 \
                DB0FC9BF \
                57 \
                6A 06 \
                E8 [0x4397B0] \
                F30F1006 \
                F30F1107 \
                F30F1046 04 \
                F30F5C05 {f32:32.0} \
                F30F1147 04 \
                6A 00 \
                83EC 0C \
                C74424 08 \
                CDCC0C40 \
                C74424 04 \
                DB0FC9BF \
                57 \
                6A 06 \
                E8 [0x4397B0] \
                83C4 08 \
                E9 [0x43995A] \
            ",
        },
        
        "Dai.RandomAttack.unlock_all.cave": {
            "access": "re",
            /*
                MOV EAX,DWORD PTR [SCOREFILE_PTR]
                CMP DWORD PTR [EAX+24246],0x11111111
                JNE LN0
                CMP DWORD PTR [EAX+2424A],0x11111111
                JNE LN0
                CMP DWORD PTR [EAX+2424E],0x11111111
                JNE LN0
                CMP DWORD PTR [EAX+24252],0x11111111
                JE 0x459604
            LN0:
                CALL score_unlock_all
                JMP 0x459604
            */
            "code": "\
                A1 <0x4DB68C> \
                81B8 46420200 11111111 \
                75 28 \
                81B8 4A420200 11111111 \
                75 1C \
                81B8 4E420200 11111111 \
                75 10 \
                81B8 52420200 11111111 \
                0F84 [0x459604] \
                E8 [0x459300] \
                E9 [0x459604] \
            "
        },
    }
}