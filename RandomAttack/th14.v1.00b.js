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
    },
    "binhacks": {
        "Dai.RandomAttack.th14.pointdevice.jmp_to_custom_ecl_ins_cave": {
            "addr": 0x4252DA,
            "expected": "0F87 [0x429C28]",
            "code": "0F87 [codecave:Dai.RandomAttack.th14.pointdevice.custom_ecl_ins]"
        },
        "Dai.RandomAttack.th14.pointdevice.jmp_to_custom_anm_ins_cave": {
            "addr": 0x4728D3,
            "expected": "0F87 [0x472AB9]",
            "code": "0F87 [codecave:Dai.RandomAttack.th14.pointdevice.custom_anm_ins]"
        },
        "Dai.RandomAttack.th14.pointdevice.replace_on_player_death_func": {
            "addr": 0x44DD91,
            "expected": "E8 [0x44F5E0]",
            "code": "E8 [codecave:Dai.RandomAttack.th14.pointdevice.on_player_death]"
        },
        "Dai.RandomAttack.th14.pointdevice.check_snapshot_status.jmp": {
            "addr": 0x436D18,
            "expected": "5F 5E B8 01000000 5B 8BE5 5D C3 <int3:5>",
            "code": "E9 [codecave:Dai.RandomAttack.th14.pointdevice.check_snapshot_status] 5F 5E B8 01000000 5B 8BE5 5D C3",
        },
        "Dai.RandomAttack.th14.pointdevice.dont_display_spell_failed_popups_if_reload.jmp": {
            "addr": 0x41D4B3,
            "expected": "0F84 CB000000",
            "code": "0F84 [codecave:Dai.RandomAttack.th14.pointdevice.dont_display_spell_failed_popups_if_reload]"
        },
        "Dai.RandomAttack.th14.pointdevice.dont_reset_stage_camera_vec3_104_if_reload.jmp": {
            "addr": 0x40D9CF,
            "expected": "C74424 3C 00000000 C74424 40 00000000 F30F7E4424 3C 660FD686 78430000 C74424 44 00000000 8B4424 44 8986 80430000",
            "code": "C74424 3C 00000000 C74424 40 00000000 C74424 44 00000000 E9 [codecave:Dai.RandomAttack.th14.pointdevice.dont_reset_stage_camera_vec3_104_if_reload] <int3:19>"
        },
        "Dai.RandomAttack.th14.pointdevice.make_unused_anm_vm_field_available": {
            "addr": 0x470F71,
            "expected": "8B87 4C050000 8987 A4040000",
            "code": "<nop:12>"
        },
        
        "Dai.RandomAttack.th14.freeze_item_cycle": {
            "addr": 0x439844,
            "expected": "8B1D 94584F00 43",
            "code": "BB 01000000 <nop:2>"
        },
        "Dai.RandomAttack.th14.replace_life_piece.jmp": {
            "addr": 0x4397BB,
            "expected": "8B5D 08 56 57",
            "code": "E9 [codecave:Dai.RandomAttack.th14.replace_life_piece]"
        },
        "Dai.RandomAttack.th14.fix_anm_effect_7_memory_leak": {
            "addr": 0x408523,
            "expected": "EB 0B 8360 18 FE C740 28 00000000 83C6 04 4F 75 DE 5F 5E 33C0 5B C3 <int3:1>",
            "code": "EB 0C 8360 18 FE 8360 1C DF 8348 1C 20 83C6 04 4F 75 DD 5F 5E 31C0 5B C3"
        },
        "Dai.RandomAttack.th14.disable_sprite_transform_for_laser_line": {
            "addr": 0x43B3C3,
            "expected": "8B4C24 14 8DB7 14090000",
            "code": "E9 [0x43B263] <nop:5>"
        },
        "Dai.RandomAttack.th14.disable_sprite_transform_for_laser_curve": {
            "addr": 0x442195,
            "expected": "8B4C24 14",
            "code": "EB 3E <nop:2>"
        },
        
        "Dai.RandomAttack.th14.unlock_extra": {
            "addr": 0x459220,
            "expected": "55 8BEC 51",
            "code": "31C0 40 C3"
        },
        
    },
    "codecaves": {
        "Dai.RandomAttack.th14.pointdevice.enemy_ptr": {
            "access": "rw",
            "size": 4,
        },
        "Dai.RandomAttack.th14.pointdevice.enemy_snapshot": {
            "access": "rw",
            "size": 0x530C,
        },
        "Dai.RandomAttack.th14.pointdevice.player_snapshot": {
            "access": "rw",
            "size": 0x184c0, 
        },
        "Dai.RandomAttack.th14.pointdevice.item_manager_snapshot": {
            "access": "rw",
            "size": "(0x1C5888 + (<option:bullet-cap.cancel-cap> * 0xC18))",
        },
        "Dai.RandomAttack.th14.pointdevice.bullet_manager_snapshot": {
            "access": "rw",
            "size": "(0x9C + (<option:bullet-cap.bullet-cap> * 0x13F4))",
        },
        "Dai.RandomAttack.th14.pointdevice.stage_background_snapshot": {
            "access": "rw",
            "size": 0x43a0,
        },
        "Dai.RandomAttack.th14.pointdevice.globals_snapshot": {
            "access": "rw",
            "size": 0x70, 
        },
        "Dai.RandomAttack.th14.pointdevice.game_speed_snapshot": {
            "access": "rw",
            "size": 4, 
        },
        
        "Dai.RandomAttack.th14.pointdevice.snapshot_status": {
            "access": "rw",
            "size": 4, 
            //0 = no action, 1 = create snapshot, 2 = load snapshot
        },
        
        "Dai.RandomAttack.th14.pointdevice.custom_ecl_ins": {
            //ins 2000 createSnapshot() - Save pointer to caller enemy, queue snapshot creation
            "access": "re",
            "code": "3D A4060000 0F85 [0x429C28] 8B8F EC400000 890D <codecave:Dai.RandomAttack.th14.pointdevice.enemy_ptr> C705 <codecave:Dai.RandomAttack.th14.pointdevice.snapshot_status> 01000000 8B35 <0x4DB67C> 83BE 84060000 04 75 07 89F1 E8 [0x44F900] 6A 1E 8D8E C0820100 E8 [0x408B00] E9 [0x429C28]",
        },
        "Dai.RandomAttack.th14.pointdevice.on_player_death": {
            //unkill player, give 60 iframes to player, create reload screen effect, queue snapshot reload
            "access": "re",
            "code": "C781 84060000 01000000 6A 50 8D89 C0820100 E8 [0x408B00] 83EC 04 8D04E4 51 6A FF 8B0D <0x4DB53C> 68 C4000000 8B49 10 50 E8 [0x42DF70] 83C4 04 C705 <codecave:Dai.RandomAttack.th14.pointdevice.snapshot_status> 02000000 C3",
        },
        
        "Dai.RandomAttack.th14.pointdevice.check_snapshot_status": {
            "access": "re",
            "code": "A1 <codecave:Dai.RandomAttack.th14.pointdevice.snapshot_status> 83F8 00 0F84 [0x436D1D] 83F8 01 75 07 E8 [codecave:Dai.RandomAttack.th14.pointdevice.create_snapshot] EB 11 83F8 02 75 0C E8 [codecave:Dai.RandomAttack.th14.pointdevice.load_snapshot] B8 03000000 EB 02 31C0 A3 <codecave:Dai.RandomAttack.th14.pointdevice.snapshot_status> E9 [0x436D1D]",
        },
        "Dai.RandomAttack.th14.pointdevice.create_snapshot": {
            "access": "re",
            "code": "56 57 8B35 <codecave:Dai.RandomAttack.th14.pointdevice.enemy_ptr> 89F1 E8 [codecave:Dai.RandomAttack.th14.pointdevice.ecl_free_async_context_list] 56 68 <codecave:Dai.RandomAttack.th14.pointdevice.enemy_snapshot> E8 [codecave:Dai.RandomAttack.th14.pointdevice.copy_enemy] FF35 <0x4DB67C> 68 <codecave:Dai.RandomAttack.th14.pointdevice.player_snapshot> E8 [codecave:Dai.RandomAttack.th14.pointdevice.copy_player] FF35 <0x4DB660> 68 <codecave:Dai.RandomAttack.th14.pointdevice.item_manager_snapshot> E8 [codecave:Dai.RandomAttack.th14.pointdevice.copy_item_manager] FF35 <0x4DB530> 68 <codecave:Dai.RandomAttack.th14.pointdevice.bullet_manager_snapshot> E8 [codecave:Dai.RandomAttack.th14.pointdevice.copy_bullet_manager] FF35 <0x4DB528> 68 <codecave:Dai.RandomAttack.th14.pointdevice.stage_background_snapshot> E8 [codecave:Dai.RandomAttack.th14.pointdevice.copy_stage_background] 68 <0x4F5828> 68 <codecave:Dai.RandomAttack.th14.pointdevice.globals_snapshot> E8 [codecave:Dai.RandomAttack.th14.pointdevice.copy_globals] A1 <0x4D8F58> A3 <codecave:Dai.RandomAttack.th14.pointdevice.game_speed_snapshot> 5F 5E C3",
        },
        "Dai.RandomAttack.th14.pointdevice.load_snapshot": {
            "access": "re",
            "code": "56 57 53 8B35 <codecave:Dai.RandomAttack.th14.pointdevice.enemy_ptr> A1 <0x4DB544> 8BB8 D0000000 85FF 74 24 8B0F 8B5F 04 85C9 74 17 39F1 74 13 F781 44520000 00200000 75 07 8B01 6A 01 FF50 14 89DF EB D8 6A 00 6A 01 E8 [0x43AC00] E8 [0x41D450] 68 <codecave:Dai.RandomAttack.th14.pointdevice.enemy_snapshot> 56 E8 [codecave:Dai.RandomAttack.th14.pointdevice.copy_enemy] 68 <codecave:Dai.RandomAttack.th14.pointdevice.player_snapshot> FF35 <0x4DB67C> E8 [codecave:Dai.RandomAttack.th14.pointdevice.copy_player] 68 <codecave:Dai.RandomAttack.th14.pointdevice.item_manager_snapshot> FF35 <0x4DB660> E8 [codecave:Dai.RandomAttack.th14.pointdevice.copy_item_manager] 68 <codecave:Dai.RandomAttack.th14.pointdevice.bullet_manager_snapshot> FF35 <0x4DB530> E8 [codecave:Dai.RandomAttack.th14.pointdevice.copy_bullet_manager] 83EC 0C 8B35 <0x4DB528> F30F7E86 74420000 660FD60424 8B86 7C420000 894424 08 68 <codecave:Dai.RandomAttack.th14.pointdevice.stage_background_snapshot> 56 E8 [codecave:Dai.RandomAttack.th14.pointdevice.copy_stage_background] F30F1086 74420000 F30F5C0424 F30F1186 78430000 F30F1086 78420000 F30F5C4424 04 F30F1186 7C430000 F30F1086 7C420000 F30F5C4424 08 F30F1186 80430000 83C4 0C 68 <codecave:Dai.RandomAttack.th14.pointdevice.globals_snapshot> 68 <0x4F5828> E8 [codecave:Dai.RandomAttack.th14.pointdevice.copy_globals] A1 <codecave:Dai.RandomAttack.th14.pointdevice.game_speed_snapshot> A3 <0x4D8F58> 8B0D <0x4DB67C> E8 [0x44F970] 8B0D <0x4DB550> FF35 <0x4F5874> FF35 <0x4F5870> E8 [0x434FD0] 8B0D <0x4F56CC> E8 [codecave:Dai.RandomAttack.th14.pointdevice.remove_vms_with_flag_set] 5B 5F 5E C3",
        },
        
        "Dai.RandomAttack.th14.pointdevice.copy_struct_part": {
            //arg1 = target, arg2 = source, arg3 = start offset (inclusive), arg4 = end offset (exclusive)
            "access": "re",
            "code": "55 89E5 8B45 10 8B4D 14 29C1 51 8B4D 0C 01C1 51 8B4D 08 01C1 51 E8 [0x487620] 83C4 0C 89EC 5D C2 1000"
        },
        "Dai.RandomAttack.th14.pointdevice.copy_enemy": {
            //arg1 = target, arg2 = source
            "access": "re",
            "code": "55 89E5 56 57 8B75 0C 8B7D 08  68 CC110000 6A 04 56 57 E8 [codecave:Dai.RandomAttack.th14.pointdevice.copy_struct_part] 68 14130000 68 D0110000 56 57 E8 [codecave:Dai.RandomAttack.th14.pointdevice.copy_struct_part] 68 58140000 68 54140000 56 57 E8 [codecave:Dai.RandomAttack.th14.pointdevice.copy_struct_part] 68 6C140000 68 68140000 56 57 E8 [codecave:Dai.RandomAttack.th14.pointdevice.copy_struct_part] 68 D8140000 68 70140000 56 57 E8 [codecave:Dai.RandomAttack.th14.pointdevice.copy_struct_part] 68 4C520000 68 E8140000 56 57 E8 [codecave:Dai.RandomAttack.th14.pointdevice.copy_struct_part] 68 DC520000 68 54520000 56 57 E8 [codecave:Dai.RandomAttack.th14.pointdevice.copy_struct_part] 68 0C530000 68 F8520000 56 57 E8 [codecave:Dai.RandomAttack.th14.pointdevice.copy_struct_part]  5F 5E 89EC 5D C2 0800"
        },
        "Dai.RandomAttack.th14.pointdevice.copy_player": {
            //arg1 = target, arg2 = source
            "access": "re",
            "code": "55 89E5 56 57 8B75 0C 8B7D 08  68 F4050000 68 E0050000 56 57 E8 [codecave:Dai.RandomAttack.th14.pointdevice.copy_struct_part]  5F 5E 89EC 5D C2 0800"
        },
        "Dai.RandomAttack.th14.pointdevice.copy_item_manager": {
            //arg1 = target, arg2 = source
            "access": "re",
            "code": "55 89E5 56 57 8B75 0C 8B7D 08  68 (0x1C5888 + (<option:bullet-cap.cancel-cap> * 0xC18)) 6A 10 56 57 E8 [codecave:Dai.RandomAttack.th14.pointdevice.copy_struct_part]  5F 5E 89EC 5D C2 0800"
        },
        "Dai.RandomAttack.th14.pointdevice.copy_bullet_manager": {
            //arg1 = target, arg2 = source
            "access": "re",
            "code": "55 89E5 56 57 8B75 0C 8B7D 08  68 (0x9C + (<option:bullet-cap.bullet-cap> * 0x13F4)) 6A 10 56 57 E8 [codecave:Dai.RandomAttack.th14.pointdevice.copy_struct_part]  5F 5E 89EC 5D C2 0800"
        },
        "Dai.RandomAttack.th14.pointdevice.copy_stage_background": {
            //arg1 = target, arg2 = source
            "access": "re",
            "code": "55 89E5 56 57 8B75 0C 8B7D 08  68 04020000 6A 20 56 57 E8 [codecave:Dai.RandomAttack.th14.pointdevice.copy_struct_part] 68 90300000 68 0C020000 56 57 E8 [codecave:Dai.RandomAttack.th14.pointdevice.copy_struct_part] 68 A0430000 68 74420000 56 57 E8 [codecave:Dai.RandomAttack.th14.pointdevice.copy_struct_part]  5F 5E 89EC 5D C2 0800"
        },
        "Dai.RandomAttack.th14.pointdevice.copy_globals": {
            //arg1 = target, arg2 = source
            "access": "re",
            "code": "55 89E5 56 57 8B75 0C 8B7D 08  6A 70 6A 00 56 57 E8 [codecave:Dai.RandomAttack.th14.pointdevice.copy_struct_part]  5F 5E 89EC 5D C2 0800"
        },
        
        "Dai.RandomAttack.th14.pointdevice.ecl_free_async_context_list": {
            "access": "re",
            "code": "53 57 56 89CB 8BB3 D4110000 85F6 74 1D <nop:1> 8B7E 04 FF36 E8 [0x4854FE] 83C4 04 56 E8 [0x4854FE] 83C4 04 89FE 85FF 75 E4 31C0 8983 D4110000 8983 D8110000 8983 DC110000 5E 5F 5B C3"
        },
        
        "Dai.RandomAttack.th14.pointdevice.dont_display_spell_failed_popups_if_reload": {
            "access": "re",
            "code": "833D <codecave:Dai.RandomAttack.th14.pointdevice.snapshot_status> 02 0F84 [0x41D5A1] E9 [0x41D584]",
        },
        
        "Dai.RandomAttack.th14.pointdevice.dont_reset_stage_camera_vec3_104_if_reload": {
            "access": "re",
            "code": "833D <codecave:Dai.RandomAttack.th14.pointdevice.snapshot_status> 03 0F84 [0x40D9FF] F30F7E4424 3C 660FD686 78430000  8B4424 44 8986 80430000 E9 [0x40D9FF]",
        },
        
        "Dai.RandomAttack.th14.pointdevice.custom_anm_ins": {
            //ins 2000 deleteOnReload() - sets a flag that causes the anm VM to delete itself upon reload
            "access": "re",
            "code": "3D 77050000 0F85 [0x472AB9] 8B43 08 8987 A4040000 E9 [0x472AB9]"
        },
        "Dai.RandomAttack.th14.pointdevice.remove_vms_with_flag_set": {
            //flag set by ins 2000 deleteOnReload
            "access": "re",
            "code": "8B81 0882FE00 85C0 74 18 8B10 85D2 74 0D 83BA A4040000 01 75 04 834A 1C 20 8B40 04 EB E4 8B81 1082FE00 85C0 74 18 8B10 85D2 74 0D 83BA A4040000 01 75 04 834A 1C 20 8B40 04 EB E4 C3"
        },
        
        "Dai.RandomAttack.th14.replace_life_piece": {
            "access": "re",
            "code": "8B5D 08 56 57 83FB 04 0F85 [0x4397C0] 83EC 08 89E7 8B75 0C F30F1006 F30F5805 <codecave:Dai.RandomAttack.th14.float.24> F30F1107 F30F1046 04 F30F1147 04 6A 00 83EC 0C C74424 08 CDCC0C40 C74424 04 DB0FC9BF 57 6A 06 E8 [0x4397B0] F30F1006 F30F5C05 <codecave:Dai.RandomAttack.th14.float.24> F30F1107 6A 00 83EC 0C C74424 08 CDCC0C40 C74424 04 DB0FC9BF 57 6A 06 E8 [0x4397B0] F30F1006 F30F1107 F30F1046 04 F30F5C05 <codecave:Dai.RandomAttack.th14.float.32> F30F1147 04 6A 00 83EC 0C C74424 08 CDCC0C40 C74424 04 DB0FC9BF 57 6A 06 E8 [0x4397B0] 83C4 08 E9 [0x43995A]",
        },
        "Dai.RandomAttack.th14.float.24": {
            "access": "r",
            "code": "+24.0f",
        },
        "Dai.RandomAttack.th14.float.32": {
            "access": "r",
            "code": "+32.0f",
        },
        
    }
}