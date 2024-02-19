import 'package:equatable/equatable.dart';import '../../../core/app_export.dart';import '../models/analys_model.dart';part 'analys_state.dart';final analysNotifier = StateNotifierProvider<AnalysNotifier, AnalysState>((ref) => AnalysNotifier(AnalysState(analysModelObj: AnalysModel())));
/// A notifier that manages the state of a Analys according to the event that is dispatched to it.
class AnalysNotifier extends StateNotifier<AnalysState> {AnalysNotifier(AnalysState state) : super(state);

 }
