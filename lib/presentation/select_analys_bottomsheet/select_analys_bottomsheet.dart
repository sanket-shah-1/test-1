import 'widgets/selectanalysgrid_item_widget.dart';import 'package:flutter/material.dart';import 'package:sanket_s_application1/core/app_export.dart';class SelectAnalysBottomsheet extends StatelessWidget {const SelectAnalysBottomsheet({Key? key}) : super(key: key);

@override Widget build(BuildContext context) { return SingleChildScrollView(child: Container(padding: EdgeInsets.symmetric(horizontal: 31.h, vertical: 46.v), child: Column(children: [Opacity(opacity: 0.8, child: Text("Select Analys", style: theme.textTheme.titleMedium)), SizedBox(height: 37.v), _buildSelectAnalysGrid(context), SizedBox(height: 72.v)]))); } 
/// Section Widget
Widget _buildSelectAnalysGrid(BuildContext context) { return Padding(padding: EdgeInsets.only(left: 1.h), child: GridView.builder(shrinkWrap: true, gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(mainAxisExtent: 171.v, crossAxisCount: 2, mainAxisSpacing: 20.h, crossAxisSpacing: 20.h), physics: NeverScrollableScrollPhysics(), itemCount: 6, itemBuilder: (context, index) {return SelectanalysgridItemWidget();})); } 
 }
