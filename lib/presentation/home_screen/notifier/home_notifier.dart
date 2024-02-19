import 'package:equatable/equatable.dart';import '../../../core/app_export.dart';import '../models/home_model.dart';import '../models/homelist_item_model.dart';part 'home_state.dart';final homeNotifier = StateNotifierProvider<HomeNotifier, HomeState>((ref) => HomeNotifier(HomeState(homeModelObj: HomeModel(homelistItemList: [HomelistItemModel(livingRoom: "Living Room", activeCounter: "2 active", twentySix: "26", c: "C"), HomelistItemModel(livingRoom: "Bedroom", activeCounter: "1 active", twentySix: "26", c: "C"), HomelistItemModel(livingRoom: "Kitchen", activeCounter: "1 active", twentySix: "26", c: "C")]))));
/// A notifier that manages the state of a Home according to the event that is dispatched to it.
class HomeNotifier extends StateNotifier<HomeState> {HomeNotifier(HomeState state) : super(state);

 }
