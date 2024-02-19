import 'package:equatable/equatable.dart';import '../../../core/app_export.dart';import '../models/login_one_model.dart';part 'login_one_state.dart';final loginOneNotifier = StateNotifierProvider<LoginOneNotifier, LoginOneState>((ref) => LoginOneNotifier(LoginOneState(userNameController: TextEditingController(), passwordController: TextEditingController(), loginOneModelObj: LoginOneModel())));
/// A notifier that manages the state of a LoginOne according to the event that is dispatched to it.
class LoginOneNotifier extends StateNotifier<LoginOneState> {LoginOneNotifier(LoginOneState state) : super(state);

 }
