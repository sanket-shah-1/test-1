import 'package:equatable/equatable.dart';import '../../../core/app_export.dart';import '../models/login_with_model.dart';part 'login_with_state.dart';final loginWithNotifier = StateNotifierProvider<LoginWithNotifier, LoginWithState>((ref) => LoginWithNotifier(LoginWithState(loginWithModelObj: LoginWithModel())));
/// A notifier that manages the state of a LoginWith according to the event that is dispatched to it.
class LoginWithNotifier extends StateNotifier<LoginWithState> {LoginWithNotifier(LoginWithState state) : super(state);

 }
