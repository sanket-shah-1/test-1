import 'package:equatable/equatable.dart';import '../../../core/app_export.dart';import '../models/connected_model.dart';part 'connected_state.dart';final connectedNotifier = StateNotifierProvider<ConnectedNotifier, ConnectedState>((ref) => ConnectedNotifier(ConnectedState(finishedCanBeUsed: false, connectedModelObj: ConnectedModel())));
/// A notifier that manages the state of a Connected according to the event that is dispatched to it.
class ConnectedNotifier extends StateNotifier<ConnectedState> {ConnectedNotifier(ConnectedState state) : super(state);

void changeCheckBox1(bool value) { state = state.copyWith(finishedCanBeUsed: value); } 
 }
