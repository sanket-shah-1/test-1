import '../../../core/app_export.dart';/// This class is used in the [playlistmusic_item_widget] screen.

// ignore_for_file: must_be_immutable
class PlaylistmusicItemModel {PlaylistmusicItemModel({this.afterSchool, this.afterSchool1, this.price, this.id}) { afterSchool = afterSchool ?? ImageConstant.imgRectangle64; afterSchool1 = afterSchool1 ?? "After School"; price = price ?? "GANGGA"; id = id ?? ""; }

String? afterSchool;

String? afterSchool1;

String? price;

String? id;

 }
