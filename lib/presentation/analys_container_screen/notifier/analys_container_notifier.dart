import 'package:equatable/equatable.dart';import '../../../core/app_export.dart';import '../models/analys_container_model.dart';part 'analys_container_state.dart';final analysContainerNotifier = StateNotifierProvider<AnalysContainerNotifier, AnalysContainerState>((ref) => AnalysContainerNotifier(AnalysContainerState(analysContainerModelObj: AnalysContainerModel())));
/// A notifier that manages the state of a AnalysContainer according to the event that is dispatched to it.
class AnalysContainerNotifier extends StateNotifier<AnalysContainerState> {AnalysContainerNotifier(AnalysContainerState state) : super(state);

 }
