part of 'music_notifier.dart';/// Represents the state of Music in the application.

// ignore_for_file: must_be_immutable
class MusicState extends Equatable {MusicState({this.musicModelObj});

MusicModel? musicModelObj;

@override List<Object?> get props =>  [musicModelObj];
MusicState copyWith({MusicModel? musicModelObj}) { return MusicState(musicModelObj: musicModelObj ?? this.musicModelObj); } 
 }
