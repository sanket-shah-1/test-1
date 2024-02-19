import 'package:equatable/equatable.dart';import '../../../core/app_export.dart';import '../models/temperatur_model.dart';part 'temperatur_state.dart';final temperaturNotifier = StateNotifierProvider<TemperaturNotifier, TemperaturState>((ref) => TemperaturNotifier(TemperaturState(temperaturModelObj: TemperaturModel())));
/// A notifier that manages the state of a Temperatur according to the event that is dispatched to it.
class TemperaturNotifier extends StateNotifier<TemperaturState> {TemperaturNotifier(TemperaturState state) : super(state);

 }
