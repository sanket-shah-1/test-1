import 'package:equatable/equatable.dart';import '../../../core/app_export.dart';import '../models/music_model.dart';part 'music_state.dart';final musicNotifier = StateNotifierProvider<MusicNotifier, MusicState>((ref) => MusicNotifier(MusicState(musicModelObj: MusicModel())));
/// A notifier that manages the state of a Music according to the event that is dispatched to it.
class MusicNotifier extends StateNotifier<MusicState> {MusicNotifier(MusicState state) : super(state);

 }
