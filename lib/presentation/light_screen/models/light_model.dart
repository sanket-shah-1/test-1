import '../../../core/app_export.dart';import 'lightgrid_item_model.dart';import 'lightlist_item_model.dart';
// ignore_for_file: must_be_immutable
class LightModel {List<LightlistItemModel> lightlistItemList = [LightlistItemModel(lights: ImageConstant.imgLamp1, lights1: "Lights"), LightlistItemModel(lights: ImageConstant.imgTelevision, lights1: "TV"), LightlistItemModel(lights: ImageConstant.imgScienceThermometer, lights1: "Temp"), LightlistItemModel(lights: ImageConstant.imgRealEstate1, lights1: "Window")];

List<LightgridItemModel> lightgridItemList = [LightgridItemModel(frontDoor: "Front Door"), LightgridItemModel(frontDoor: "Halleway"), LightgridItemModel(frontDoor: "Themorty"), LightgridItemModel(frontDoor: "Halleway Front")];

 }
