{
    "codecaves": {
		/*
			(on enemy creation)
			If parent is not intangible, set child's last tangible parent ID to parent's ID.
			Otherwise, set child's last non-intangible parent ID to parent's last tangible parent ID.
		*/
		"Dai.enemy.set-last-tangible-parent-id": {
            "access": "re",
			"code": "55 89E5 50 51 52 56 8B75 08 8B86 <option:zEnemyFull.parent_id> 85C0 74 34 50 E8 [<option:zEnemyManager::get_enemy_by_id>] 85C0 74 2A 8B90 <option:zEnemyFull.flags_lo> F7C2 <option:zEnemyFlag.intangible> 75 08 83E2 <option:zEnemyFlag.no_hit_hurt_invisible> 83FA <option:zEnemyFlag.no_hit_hurt_invisible> 75 08 8B80 <option:zEnemyFull.last_tangible_parent_id> EB 06 8B80 <option:zEnemyFull.enemy_id> 8986 <option:zEnemyFull.last_tangible_parent_id> 5E 5A 59 58 89EC 5D C2 0400",
		},
		/* 
			Copy the ID of the enemy to zoom in on to the (repurposed) string pointer field in the last et_ex slot of the bullet mgr, 
			which is never used in vanilla, and very unlikely to be used in any mods (but not impossible!).
			This field is also used because it gets automatically copied to the bullets/lasers when they're shot,
			which saves a bunch of time in development. 
			
			The ID is chosen as follows: 
			1. 	If the enemy doesn't have the intangible flag or doesn't have the no hitbox/hurtbox and 
				invisibilty flag at the same time, copy its own ID to the field. 
			2.	If it does, check if the last tangible parent enemy is alive.
			3.	If said enemy is alive, repeat from step 1 with that enemy
				Otherwise, set the field to 0. (no zoom in will happen)
		*/
		"Dai.ecl.etNew.set-enemy-id": {
            "access": "re",
            "code": "55 89E5 56 57 8B45 08 31F6 8B90 <option:zEnemyFull.flags_lo> F7C2 <option:zEnemyFlag.intangible> 75 08 83E2 <option:zEnemyFlag.no_hit_hurt_invisible> 83FA <option:zEnemyFlag.no_hit_hurt_invisible> 75 18 8BB8 <option:zEnemyFull.last_tangible_parent_id> 57 E8 [<option:zEnemyManager::enemy_id_is_alive>] 85C0 74 1F 57 E8 [<option:zEnemyManager::get_enemy_by_id>] EB D2 85F6 75 08 8BB0 <option:zEnemyFull.enemy_id> EB DC 8B80 <option:zEnemyFull.enemy_id> C1E0 10 09C6 8B55 0C 8932 5F 5E 89EC 5D C2 0800",
        },
		
		"Dai.bullet.ex-enm.set-parent-id": {
			"access": "re",
			"code": "55 89E5 51 56 57 8B75 08 0FB7BE (<option:zBullet.last-ex.string>+0) 57 E8 [<option:zEnemyManager::enemy_id_is_alive>] 85C0 75 10 0FB786 (<option:zBullet.last-ex.string>+2) 5F 5E 59 89EC 5D C2 0400 89F8 5F 5E 59 89EC 5D C2 0400",
		},
		/*
			If the enemy that killed the player is alive, get its coordinates and store them in F0 and F1 variables of the arcade surface anm vm,
			and call an anm interrupt on said vm. Toggle freeze, play a sound, and pause the bgm.
		*/
		"Dai.player.initiate-zoom-on-death": {
			"access": "re",
			"code": "55 89E5 56 0FB735 (<codecave:Dai.global.killer-enemy-id>+0) 56 E8 [<option:zEnemyManager::enemy_id_is_alive>] 85C0 75 1B 0FB735 (<codecave:Dai.global.killer-enemy-id>+2) 56 E8 [<option:zEnemyManager::enemy_id_is_alive>] 85C0 75 0A 5E 89 EC 5D C3 <int3:5> 56 E8 [<option:zEnemyManager::get_enemy_by_id>] 8B35 <option:arcade_surface_vm_ptr> 8B90 <option:zEnemyFull.final_pos.x> 8996 <option:zAnmVm.float_script_vars.0> 8B90 <option:zEnemyFull.final_pos.y> 8996 <option:zAnmVm.float_script_vars.1> 8B90 <option:zEnemyFull.kill_count_field> 83C2 01 8990 <option:zEnemyFull.kill_count_field> 83FA 04 75 08 51 6A <option:nemesis_sound_index> E8 [<option:zSoundManager::play_sound_centered>] C786 <option:zAnmVm.pending_switch_label> 1E000000 C705 <codecave:Dai.global.freeze-pre> 01000000 C705 <codecave:Dai.global.freeze> 00000000 C705 <codecave:Dai.global.freeze-timer> 3C000000 51 6A <option:zoom_sound_index> E8 [<option:zSoundManager::play_sound_centered>] A1 <option:zGlobals.flags.ptr> 24 30 3C 20 74 13 68 <option:bgm_pause_string_ptr> 6A 00 6A 06 B9 <option:sound_manager_ptr> E8 [<option:zSoundManager::modify_bgm>] B9 <option:sound_manager_ptr> E8 [<option:zSoundManager::update_sound_thread>] 85C0 75 F2 5E 89EC 5D C3",
		},
		
		"Dai.player.on-tick-freeze": {
			"access": "re",
			"code": "833D <codecave:Dai.global.freeze-pre> 00 74 63 C705 <codecave:Dai.global.freeze> 01000000 833D <codecave:Dai.global.freeze-timer> 00 74 0C FF0D <codecave:Dai.global.freeze-timer> B8 01000000 C3 F705 <option:hardware_input_ptr> 0B020000 75 06 B8 01000000 C3 C705 <codecave:Dai.global.freeze-pre> 00000000 A1 <option:arcade_surface_vm_ptr> C780 <option:zAnmVm.pending_switch_label> 1F000000 68 <option:bgm_unpause_string_ptr> 6A 00 6A 07 B9 <option:sound_manager_ptr> E8 [<option:zSoundManager::modify_bgm>] B8 01000000 C3 C705 <codecave:Dai.global.freeze> 00000000 E9 [<option:zPlayer::on_tick>]",
		},
	}
}
