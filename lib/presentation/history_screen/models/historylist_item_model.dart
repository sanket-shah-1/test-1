import '../../../core/app_export.dart';/// This class is used in the [historylist_item_widget] screen.

// ignore_for_file: must_be_immutable
class HistorylistItemModel {HistorylistItemModel({this.lightBulb, this.lamp, this.kitchen1ItemList, this.duration, this.id}) { lightBulb = lightBulb ?? ImageConstant.imgLightBulbGray900; lamp = lamp ?? "Lamp"; kitchen1ItemList = kitchen1ItemList ?? List.generate(2, (index) => Kitchen1ItemModel()); duration = duration ?? "3 Hours"; id = id ?? ""; }

String? lightBulb;

String? lamp;

List<Kitchen1ItemModel>? kitchen1ItemList;

String? duration;

String? id;

 }
