import '../../../core/app_export.dart';import '../models/music_model.dart';/// A provider class for the MusicScreen.
///
/// This provider manages the state of the MusicScreen, including the
/// current musicModelObj

// ignore_for_file: must_be_immutable
class MusicProvider extends ChangeNotifier {MusicModel musicModelObj = MusicModel();

@override void dispose() { super.dispose(); } 
 }
