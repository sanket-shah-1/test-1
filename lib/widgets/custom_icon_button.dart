import 'package:flutter/material.dart';import '../core/app_export.dart';extension IconButtonStyleHelper on CustomIconButton {static BoxDecoration get gradientCyanToPrimary =>  BoxDecoration(borderRadius: BorderRadius.circular(22.h), gradient: LinearGradient(begin: Alignment(-0.26, 0), end: Alignment(1.14, 1), colors: [appTheme.cyan30002, theme.colorScheme.primary]));
static BoxDecoration get fillRedA =>  BoxDecoration(color: appTheme.redA100, borderRadius: BorderRadius.circular(27.h));
static BoxDecoration get gradientCyanToPrimaryTL27 =>  BoxDecoration(borderRadius: BorderRadius.circular(27.h), gradient: LinearGradient(begin: Alignment(-0.26, 0), end: Alignment(1.14, 1), colors: [appTheme.cyan30002, theme.colorScheme.primary]));
static BoxDecoration get fillGrayTL12 =>  BoxDecoration(color: appTheme.gray5001, borderRadius: BorderRadius.circular(12.h));
static BoxDecoration get gradientCyanToPrimaryTL12 =>  BoxDecoration(borderRadius: BorderRadius.circular(12.h), gradient: LinearGradient(begin: Alignment(-0.26, 0), end: Alignment(1.14, 1), colors: [appTheme.cyan30002, theme.colorScheme.primary]));
static BoxDecoration get gradientCyanToPrimaryTL33 =>  BoxDecoration(borderRadius: BorderRadius.circular(33.h), gradient: LinearGradient(begin: Alignment(-0.26, 0), end: Alignment(1.14, 1), colors: [appTheme.cyan30002, theme.colorScheme.primary]));
static BoxDecoration get fillWhiteA =>  BoxDecoration(color: appTheme.whiteA700, borderRadius: BorderRadius.circular(31.h));
static BoxDecoration get fillOnError =>  BoxDecoration(color: theme.colorScheme.onError, borderRadius: BorderRadius.circular(12.h));
 }
class CustomIconButton extends StatelessWidget {CustomIconButton({Key? key, this.alignment, this.height, this.width, this.padding, this.decoration, this.child, this.onTap}) : super(key: key);

final Alignment? alignment;

final double? height;

final double? width;

final EdgeInsetsGeometry? padding;

final BoxDecoration? decoration;

final Widget? child;

final VoidCallback? onTap;

@override Widget build(BuildContext context) { return alignment != null ? Align(alignment: alignment ?? Alignment.center, child: iconButtonWidget) : iconButtonWidget; } 
Widget get iconButtonWidget =>  SizedBox(height: height ?? 0, width: width ?? 0, child: IconButton(padding: EdgeInsets.zero, icon: Container(height: height ?? 0, width: width ?? 0, padding: padding ?? EdgeInsets.zero, decoration: decoration ?? BoxDecoration(color: appTheme.gray50, borderRadius: BorderRadius.circular(12.h)), child: child), onPressed: onTap));
 }
