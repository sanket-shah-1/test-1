import 'package:equatable/equatable.dart';import '../../../core/app_export.dart';import '../models/flash_model.dart';part 'flash_state.dart';final flashNotifier = StateNotifierProvider<FlashNotifier, FlashState>((ref) => FlashNotifier(FlashState(flashModelObj: FlashModel())));
/// A notifier that manages the state of a Flash according to the event that is dispatched to it.
class FlashNotifier extends StateNotifier<FlashState> {FlashNotifier(FlashState state) : super(state);

 }
