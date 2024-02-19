import '../../core/app_export.dart';import '../../widgets/app_bar/appbar_leading_iconbutton.dart';import '../../widgets/app_bar/appbar_subtitle.dart';import '../../widgets/app_bar/custom_app_bar.dart';import 'models/playlist_music_model.dart';import 'models/playlistmusic_item_model.dart';import 'provider/playlist_music_provider.dart';import 'widgets/playlistmusic_item_widget.dart';class PlaylistMusicScreen extends StatefulWidget {const PlaylistMusicScreen({Key? key}) : super(key: key);

@override PlaylistMusicScreenState createState() =>  PlaylistMusicScreenState();
static Widget builder(BuildContext context) { return ChangeNotifierProvider(create: (context) => PlaylistMusicProvider(), child: PlaylistMusicScreen()); } 
 }
class PlaylistMusicScreenState extends State<PlaylistMusicScreen> {@override void initState() { super.initState(); } 
@override Widget build(BuildContext context) { return SafeArea(child: Scaffold(backgroundColor: appTheme.whiteA700, appBar: _buildAppBar(context), body: SizedBox(width: SizeUtils.width, child: SingleChildScrollView(padding: EdgeInsets.only(top: 34.v), child: Container(padding: EdgeInsets.symmetric(horizontal: 32.h, vertical: 8.v), decoration: AppDecoration.gradientGrayToGray.copyWith(borderRadius: BorderRadiusStyle.roundedBorder28), child: Column(mainAxisSize: MainAxisSize.min, children: [SizedBox(height: 32.v), CustomImageView(imagePath: ImageConstant.imgArrowUp, height: 24.adaptSize, width: 24.adaptSize), SizedBox(height: 40.v), _buildPlaylistMusic(context)])))))); } 
/// Section Widget
PreferredSizeWidget _buildAppBar(BuildContext context) { return CustomAppBar(leadingWidth: 88.h, leading: AppbarLeadingIconbutton(imagePath: ImageConstant.imgArrowLeft, margin: EdgeInsets.only(left: 32.h), onTap: () {onTapArrowLeft(context);}), actions: [AppbarSubtitle(text: "lbl_demons".tr, margin: EdgeInsets.fromLTRB(32.h, 15.v, 32.h, 13.v))]); } 
/// Section Widget
Widget _buildPlaylistMusic(BuildContext context) { return Padding(padding: EdgeInsets.only(right: 10.h), child: Consumer<PlaylistMusicProvider>(builder: (context, provider, child) {return ListView.separated(physics: NeverScrollableScrollPhysics(), shrinkWrap: true, separatorBuilder: (context, index) {return SizedBox(height: 30.v);}, itemCount: provider.playlistMusicModelObj.playlistmusicItemList.length, itemBuilder: (context, index) {PlaylistmusicItemModel model = provider.playlistMusicModelObj.playlistmusicItemList[index]; return PlaylistmusicItemWidget(model);});})); } 
/// Navigates to the previous screen.
onTapArrowLeft(BuildContext context) { NavigatorService.goBack(); } 
 }
