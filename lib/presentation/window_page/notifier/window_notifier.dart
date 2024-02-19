import 'package:equatable/equatable.dart';import '../../../core/app_export.dart';import '../models/window_model.dart';part 'window_state.dart';final windowNotifier = StateNotifierProvider<WindowNotifier, WindowState>((ref) => WindowNotifier(WindowState(windowModelObj: WindowModel())));
/// A notifier that manages the state of a Window according to the event that is dispatched to it.
class WindowNotifier extends StateNotifier<WindowState> {WindowNotifier(WindowState state) : super(state);

 }
