part of 'playlist_music_notifier.dart';/// Represents the state of PlaylistMusic in the application.

// ignore_for_file: must_be_immutable
class PlaylistMusicState extends Equatable {PlaylistMusicState({this.playlistMusicModelObj});

PlaylistMusicModel? playlistMusicModelObj;

@override List<Object?> get props =>  [playlistMusicModelObj];
PlaylistMusicState copyWith({PlaylistMusicModel? playlistMusicModelObj}) { return PlaylistMusicState(playlistMusicModelObj: playlistMusicModelObj ?? this.playlistMusicModelObj); } 
 }
