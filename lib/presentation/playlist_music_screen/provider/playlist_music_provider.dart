import '../../../core/app_export.dart';import '../models/playlist_music_model.dart';import '../models/playlistmusic_item_model.dart';/// A provider class for the PlaylistMusicScreen.
///
/// This provider manages the state of the PlaylistMusicScreen, including the
/// current playlistMusicModelObj

// ignore_for_file: must_be_immutable
class PlaylistMusicProvider extends ChangeNotifier {PlaylistMusicModel playlistMusicModelObj = PlaylistMusicModel();

@override void dispose() { super.dispose(); } 
 }
