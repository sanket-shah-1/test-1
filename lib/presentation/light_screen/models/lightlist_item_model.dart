import '../../../core/app_export.dart';/// This class is used in the [lightlist_item_widget] screen.

// ignore_for_file: must_be_immutable
class LightlistItemModel {LightlistItemModel({this.lights, this.lights1, this.id}) { lights = lights ?? ImageConstant.imgLamp1; lights1 = lights1 ?? "Lights"; id = id ?? ""; }

String? lights;

String? lights1;

String? id;

 }
