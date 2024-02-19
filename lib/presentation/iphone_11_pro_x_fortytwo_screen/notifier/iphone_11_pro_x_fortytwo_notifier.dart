import 'package:equatable/equatable.dart';import '../../../core/app_export.dart';import '../models/iphone_11_pro_x_fortytwo_model.dart';part 'iphone_11_pro_x_fortytwo_state.dart';final iphone11ProXFortytwoNotifier = StateNotifierProvider<Iphone11ProXFortytwoNotifier, Iphone11ProXFortytwoState>((ref) => Iphone11ProXFortytwoNotifier(Iphone11ProXFortytwoState(iphone11ProXFortytwoModelObj: Iphone11ProXFortytwoModel())));
/// A notifier that manages the state of a Iphone11ProXFortytwo according to the event that is dispatched to it.
class Iphone11ProXFortytwoNotifier extends StateNotifier<Iphone11ProXFortytwoState> {Iphone11ProXFortytwoNotifier(Iphone11ProXFortytwoState state) : super(state);

 }
