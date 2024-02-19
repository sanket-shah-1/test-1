import '../../../core/app_export.dart';
// ignore_for_file: must_be_immutable
class Kitchen1ItemWidget extends StatelessWidget {Kitchen1ItemWidget(this.kitchen1ItemModelObj, {Key? key, this.onSelectedChipView1}) : super(key: key);

Kitchen1ItemModel kitchen1ItemModelObj;

 Function(bool)? onSelectedChipView1;

@override Widget build(BuildContext context) { return Theme(data: ThemeData(canvasColor: Colors.transparent), child: RawChip(padding: EdgeInsets.symmetric(horizontal: 12.h, vertical: 5.v), showCheckmark: false, labelPadding: EdgeInsets.zero, label: Text(kitchen1ItemModelObj.kitchen!, style: TextStyle(color: appTheme.gray900.withOpacity(0.42), fontSize: 10.fSize, fontFamily: 'Poppins', fontWeight: FontWeight.w400)), selected: (kitchen1ItemModelObj.isSelected ?? false), backgroundColor: Colors.transparent, selectedColor: appTheme.gray900.withOpacity(0.2), shape: (kitchen1ItemModelObj.isSelected ?? false) ? RoundedRectangleBorder(side: BorderSide(color: theme.colorScheme.onPrimaryContainer.withOpacity(0.1), width: 1.h), borderRadius: BorderRadius.circular(4.h)) : RoundedRectangleBorder(side: BorderSide(color: theme.colorScheme.onPrimaryContainer.withOpacity(0.1), width: 1.h), borderRadius: BorderRadius.circular(4.h)), onSelected: (value) {onSelectedChipView1?.call(value);})); } 
 }
