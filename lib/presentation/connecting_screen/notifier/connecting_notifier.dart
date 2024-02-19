import 'package:equatable/equatable.dart';import '../../../core/app_export.dart';import '../models/connecting_model.dart';part 'connecting_state.dart';final connectingNotifier = StateNotifierProvider<ConnectingNotifier, ConnectingState>((ref) => ConnectingNotifier(ConnectingState(connectingModelObj: ConnectingModel())));
/// A notifier that manages the state of a Connecting according to the event that is dispatched to it.
class ConnectingNotifier extends StateNotifier<ConnectingState> {ConnectingNotifier(ConnectingState state) : super(state);

 }
