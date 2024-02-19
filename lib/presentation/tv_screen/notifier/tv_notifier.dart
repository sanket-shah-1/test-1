import 'package:equatable/equatable.dart';import 'package:sms_autofill/sms_autofill.dart';import '../../../core/app_export.dart';import '../models/tv_model.dart';part 'tv_state.dart';final tvNotifier = StateNotifierProvider<TvNotifier, TvState>((ref) => TvNotifier(TvState(otpController: TextEditingController(), tvModelObj: TvModel())));
/// A notifier that manages the state of a Tv according to the event that is dispatched to it.
class TvNotifier extends StateNotifier<TvState> with  CodeAutoFill {TvNotifier(TvState state) : super(state);

@override void codeUpdated() { state.otpController?.text = code ?? ''; } 
 }
