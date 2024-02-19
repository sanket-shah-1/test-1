import 'widgets/history_item_widget.dart';import 'package:flutter/material.dart';import 'package:sanket_s_application1/core/app_export.dart';class HistoryScreen extends StatelessWidget {const HistoryScreen({Key? key}) : super(key: key);

@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.whiteA700, body: Container(width: double.maxFinite, padding: EdgeInsets.symmetric(horizontal: 32.h, vertical: 20.v), child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [SizedBox(height: 49.v), Opacity(opacity: 0.8, child: Text("History", style: theme.textTheme.headlineSmall)), SizedBox(height: 38.v), _buildHistory(context)])))); } 
/// Section Widget
Widget _buildHistory(BuildContext context) { return ListView.separated(physics: NeverScrollableScrollPhysics(), shrinkWrap: true, separatorBuilder: (context, index) {return SizedBox(height: 20.v);}, itemCount: 8, itemBuilder: (context, index) {return HistoryItemWidget();}); } 
 }
