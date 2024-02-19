import 'package:equatable/equatable.dart';import '../../../core/app_export.dart';import '../models/signup_one_model.dart';part 'signup_one_state.dart';final signupOneNotifier = StateNotifierProvider<SignupOneNotifier, SignupOneState>((ref) => SignupOneNotifier(SignupOneState(phoneNumberController: TextEditingController(), passwordController: TextEditingController(), signupOneModelObj: SignupOneModel())));
/// A notifier that manages the state of a SignupOne according to the event that is dispatched to it.
class SignupOneNotifier extends StateNotifier<SignupOneState> {SignupOneNotifier(SignupOneState state) : super(state);

 }
