import 'package:equatable/equatable.dart';import '../../../core/app_export.dart';import '../models/window_tab_container_model.dart';part 'window_tab_container_state.dart';final windowTabContainerNotifier = StateNotifierProvider<WindowTabContainerNotifier, WindowTabContainerState>((ref) => WindowTabContainerNotifier(WindowTabContainerState(windowTabContainerModelObj: WindowTabContainerModel())));
/// A notifier that manages the state of a WindowTabContainer according to the event that is dispatched to it.
class WindowTabContainerNotifier extends StateNotifier<WindowTabContainerState> {WindowTabContainerNotifier(WindowTabContainerState state) : super(state);

 }
