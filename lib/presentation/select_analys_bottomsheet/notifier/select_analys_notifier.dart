import 'package:equatable/equatable.dart';import '../../../core/app_export.dart';import '../models/select_analys_model.dart';import '../models/selectanalysgrid_item_model.dart';part 'select_analys_state.dart';final selectAnalysNotifier = StateNotifierProvider<SelectAnalysNotifier, SelectAnalysState>((ref) => SelectAnalysNotifier(SelectAnalysState(selectAnalysModelObj: SelectAnalysModel(selectanalysgridItemList: [SelectanalysgridItemModel(thirty: "30", twenty: "20", ten: "10", livingroom: ImageConstant.imgGroup, livingRoom: "Living room"), SelectanalysgridItemModel(livingRoom: "54%"), SelectanalysgridItemModel(livingRoom: "34%")]))));
/// A notifier that manages the state of a SelectAnalys according to the event that is dispatched to it.
class SelectAnalysNotifier extends StateNotifier<SelectAnalysState> {SelectAnalysNotifier(SelectAnalysState state) : super(state);

 }
