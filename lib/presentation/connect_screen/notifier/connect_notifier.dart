import 'package:equatable/equatable.dart';import '../../../core/app_export.dart';import '../models/connect_model.dart';part 'connect_state.dart';final connectNotifier = StateNotifierProvider<ConnectNotifier, ConnectState>((ref) => ConnectNotifier(ConnectState(connectModelObj: ConnectModel())));
/// A notifier that manages the state of a Connect according to the event that is dispatched to it.
class ConnectNotifier extends StateNotifier<ConnectState> {ConnectNotifier(ConnectState state) : super(state);

 }
