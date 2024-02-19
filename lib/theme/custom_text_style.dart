import '../core/app_export.dart';extension on TextStyle {TextStyle get poppins { return copyWith(fontFamily: 'Poppins'); } 
TextStyle get aBeeZee { return copyWith(fontFamily: 'ABeeZee'); } 
 }
/// A collection of pre-defined text styles for customizing text appearance,
/// categorized by different font families and weights.
/// Additionally, this class includes extensions on [TextStyle] to easily apply specific font families to text.
class CustomTextStyles {static get bodyLarge18 =>  theme.textTheme.bodyLarge!.copyWith(fontSize: 18.fSize);
static get bodyLargeGray900 =>  theme.textTheme.bodyLarge!.copyWith(color: appTheme.gray900.withOpacity(0.56));
static get bodyLargeGray900_1 =>  theme.textTheme.bodyLarge!.copyWith(color: appTheme.gray900.withOpacity(0.49));
static get bodyLargeOnPrimaryContainer =>  theme.textTheme.bodyLarge!.copyWith(color: theme.colorScheme.onPrimaryContainer);
static get bodyLargeOnPrimaryContainer_1 =>  theme.textTheme.bodyLarge!.copyWith(color: theme.colorScheme.onPrimaryContainer.withOpacity(0.56));
static get bodyLargeWhiteA700 =>  theme.textTheme.bodyLarge!.copyWith(color: appTheme.whiteA700);
static get bodyMediumABeeZeeOnPrimary =>  theme.textTheme.bodyMedium!.aBeeZee.copyWith(color: theme.colorScheme.onPrimary);
static get bodyMediumABeeZeePrimaryContainer =>  theme.textTheme.bodyMedium!.aBeeZee.copyWith(color: theme.colorScheme.primaryContainer);
static get bodyMediumABeeZeeSecondaryContainer =>  theme.textTheme.bodyMedium!.aBeeZee.copyWith(color: theme.colorScheme.secondaryContainer);
static get bodyMediumABeeZeeWhiteA700 =>  theme.textTheme.bodyMedium!.aBeeZee.copyWith(color: appTheme.whiteA700);
static get bodyMediumGray900 =>  theme.textTheme.bodyMedium!.copyWith(color: appTheme.gray900.withOpacity(0.49));
static get bodySmallGray900 =>  theme.textTheme.bodySmall!.copyWith(color: appTheme.gray900.withOpacity(0.56), fontSize: 12.fSize);
static get bodySmallGray90012 =>  theme.textTheme.bodySmall!.copyWith(color: appTheme.gray900.withOpacity(0.49), fontSize: 12.fSize);
static get bodySmallGray90012_1 =>  theme.textTheme.bodySmall!.copyWith(color: appTheme.gray900.withOpacity(0.64), fontSize: 12.fSize);
static get bodySmallGray900_1 =>  theme.textTheme.bodySmall!.copyWith(color: appTheme.gray900.withOpacity(0.56));
static get bodySmallGray900_2 =>  theme.textTheme.bodySmall!.copyWith(color: appTheme.gray900.withOpacity(0.39));
static get bodySmallGray900_3 =>  theme.textTheme.bodySmall!.copyWith(color: appTheme.gray900.withOpacity(0.49));
static get bodySmallOnPrimaryContainer =>  theme.textTheme.bodySmall!.copyWith(color: theme.colorScheme.onPrimaryContainer.withOpacity(0.42));
static get bodySmallOnPrimaryContainer12 =>  theme.textTheme.bodySmall!.copyWith(color: theme.colorScheme.onPrimaryContainer, fontSize: 12.fSize);
static get bodySmallRedA100 =>  theme.textTheme.bodySmall!.copyWith(color: appTheme.redA100, fontSize: 12.fSize);
static get bodySmallWhiteA700 =>  theme.textTheme.bodySmall!.copyWith(color: appTheme.whiteA700.withOpacity(0.64), fontSize: 12.fSize);
static get bodySmallWhiteA70012 =>  theme.textTheme.bodySmall!.copyWith(color: appTheme.whiteA700, fontSize: 12.fSize);
static get bodySmallWhiteA700_1 =>  theme.textTheme.bodySmall!.copyWith(color: appTheme.whiteA700.withOpacity(0.64));
static get displayMediumWhiteA700 =>  theme.textTheme.displayMedium!.copyWith(color: appTheme.whiteA700, fontSize: 42.fSize, fontWeight: FontWeight.w500);
static get displaySmallABeeZeeOnPrimary =>  theme.textTheme.displaySmall!.aBeeZee.copyWith(color: theme.colorScheme.onPrimary, fontSize: 34.fSize, fontWeight: FontWeight.w400);
static get headlineMediumRegular =>  theme.textTheme.headlineMedium!.copyWith(fontWeight: FontWeight.w400);
static get headlineSmallGray900 =>  theme.textTheme.headlineSmall!.copyWith(color: appTheme.gray900, fontWeight: FontWeight.w400);
static get headlineSmallRegular =>  theme.textTheme.headlineSmall!.copyWith(fontWeight: FontWeight.w400);
static get labelLargeCyan30002 =>  theme.textTheme.labelLarge!.copyWith(color: appTheme.cyan30002, fontWeight: FontWeight.w700);
static get labelLargeCyan30002Medium =>  theme.textTheme.labelLarge!.copyWith(color: appTheme.cyan30002, fontWeight: FontWeight.w500);
static get labelLargeCyan30002_1 =>  theme.textTheme.labelLarge!.copyWith(color: appTheme.cyan30002);
static get labelLargeGray900 =>  theme.textTheme.labelLarge!.copyWith(color: appTheme.gray900.withOpacity(0.42));
static get labelLargeGray900Bold =>  theme.textTheme.labelLarge!.copyWith(color: appTheme.gray900.withOpacity(0.56), fontWeight: FontWeight.w700);
static get labelLargeGray900Medium =>  theme.textTheme.labelLarge!.copyWith(color: appTheme.gray900.withOpacity(0.56), fontWeight: FontWeight.w500);
static get labelLargeGray900Medium_1 =>  theme.textTheme.labelLarge!.copyWith(color: appTheme.gray900.withOpacity(0.64), fontWeight: FontWeight.w500);
static get labelLargeGray900_1 =>  theme.textTheme.labelLarge!.copyWith(color: appTheme.gray900.withOpacity(0.56));
static get labelLargeGray900_2 =>  theme.textTheme.labelLarge!.copyWith(color: appTheme.gray900.withOpacity(0.64));
static get labelMediumCyan30002 =>  theme.textTheme.labelMedium!.copyWith(color: appTheme.cyan30002);
static get labelMediumCyan30002_1 =>  theme.textTheme.labelMedium!.copyWith(color: appTheme.cyan30002.withOpacity(0.64));
static get labelMediumGray900 =>  theme.textTheme.labelMedium!.copyWith(color: appTheme.gray900.withOpacity(0.56), fontWeight: FontWeight.w700);
static get labelMediumGray900Bold =>  theme.textTheme.labelMedium!.copyWith(color: appTheme.gray900.withOpacity(0.64), fontWeight: FontWeight.w700);
static get titleLargeWhiteA700 =>  theme.textTheme.titleLarge!.copyWith(color: appTheme.whiteA700, fontWeight: FontWeight.w600);
static get titleMedium16 =>  theme.textTheme.titleMedium!.copyWith(fontSize: 16.fSize);
static get titleMediumBold =>  theme.textTheme.titleMedium!.copyWith(fontSize: 16.fSize, fontWeight: FontWeight.w700);
static get titleMediumBold_1 =>  theme.textTheme.titleMedium!.copyWith(fontWeight: FontWeight.w700);
static get titleMediumCyan30002 =>  theme.textTheme.titleMedium!.copyWith(color: appTheme.cyan30002, fontSize: 16.fSize);
static get titleMediumCyan3000216 =>  theme.textTheme.titleMedium!.copyWith(color: appTheme.cyan30002.withOpacity(0.64), fontSize: 16.fSize);
static get titleMediumCyan30002Medium =>  theme.textTheme.titleMedium!.copyWith(color: appTheme.cyan30002.withOpacity(0.64), fontSize: 16.fSize, fontWeight: FontWeight.w500);
static get titleMediumGray900 =>  theme.textTheme.titleMedium!.copyWith(color: appTheme.gray900.withOpacity(0.46), fontSize: 16.fSize, fontWeight: FontWeight.w500);
static get titleMediumGray900Medium =>  theme.textTheme.titleMedium!.copyWith(color: appTheme.gray900.withOpacity(0.42), fontSize: 16.fSize, fontWeight: FontWeight.w500);
static get titleMediumMedium =>  theme.textTheme.titleMedium!.copyWith(fontSize: 16.fSize, fontWeight: FontWeight.w500);
static get titleMediumOnPrimaryContainer =>  theme.textTheme.titleMedium!.copyWith(color: theme.colorScheme.onPrimaryContainer.withOpacity(0.64));
static get titleMediumOnPrimaryContainer16 =>  theme.textTheme.titleMedium!.copyWith(color: theme.colorScheme.onPrimaryContainer.withOpacity(0.64), fontSize: 16.fSize);
static get titleMediumRedA100 =>  theme.textTheme.titleMedium!.copyWith(color: appTheme.redA100.withOpacity(0.64), fontSize: 16.fSize, fontWeight: FontWeight.w500);
static get titleMediumWhiteA700 =>  theme.textTheme.titleMedium!.copyWith(color: appTheme.whiteA700, fontSize: 16.fSize, fontWeight: FontWeight.w700);
static get titleMediumWhiteA70016 =>  theme.textTheme.titleMedium!.copyWith(color: appTheme.whiteA700, fontSize: 16.fSize);
static get titleSmallCyan30002 =>  theme.textTheme.titleSmall!.copyWith(color: appTheme.cyan30002, fontWeight: FontWeight.w500);
static get titleSmallGray900 =>  theme.textTheme.titleSmall!.copyWith(color: appTheme.gray900.withOpacity(0.49));
static get titleSmallGray900Medium =>  theme.textTheme.titleSmall!.copyWith(color: appTheme.gray900.withOpacity(0.42), fontWeight: FontWeight.w500);
static get titleSmallGray900Medium_1 =>  theme.textTheme.titleSmall!.copyWith(color: appTheme.gray900.withOpacity(0.64), fontWeight: FontWeight.w500);
static get titleSmallOnPrimaryContainer =>  theme.textTheme.titleSmall!.copyWith(color: theme.colorScheme.onPrimaryContainer, fontWeight: FontWeight.w500);
static get titleSmallOnPrimaryContainer_1 =>  theme.textTheme.titleSmall!.copyWith(color: theme.colorScheme.onPrimaryContainer);
 }
