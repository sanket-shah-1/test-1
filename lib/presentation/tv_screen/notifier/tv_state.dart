part of 'tv_notifier.dart';/// Represents the state of Tv in the application.

// ignore_for_file: must_be_immutable
class TvState extends Equatable {TvState({this.otpController, this.tvModelObj});

TextEditingController? otpController;

TvModel? tvModelObj;

@override List<Object?> get props =>  [otpController, tvModelObj];
TvState copyWith({TextEditingController? otpController, TvModel? tvModelObj, }) { return TvState(otpController: otpController ?? this.otpController, tvModelObj: tvModelObj ?? this.tvModelObj); } 
 }
