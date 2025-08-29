namespace EchoesOfTheVeil.Definitions;

public static class RequirementsFailureReasons {
  public static readonly string Abilities = "You're missing some required abilities {abilities}.";
  public static readonly string Alignment = "Your alignment must be {operator} {required}, but yours is {current}.";
  public static readonly string AnyItems = "You don't have any of the required items {items}.";
  public static readonly string MinimumAttributes = "Your attributes aren't high enough. The following are too low {attributes}.";
  public static readonly string MaximumAttributes = "Your attributes are too high for this. The following are too high {attributes}.";
  public static readonly string AnyClasses = "You must belong to one of the following classes: {requiredClasses} — but you are a {currentClass}.";
  public static readonly string Effects = "You're not under the required effects {effects}.";
  public static readonly string EquippedItems = "You must have the following items equipped: {items}.";
  public static readonly string EquippedAnyItems = "You must have any of the following items equipped: {items}.";
  public static readonly string ForbiddenClasses = "Your class {currentClass} prevents you from doing this.";
  public static readonly string ForbiddenEquippedItems = "You cannot have these items equipped: {items}.";
  public static readonly string ForbiddenAbilities = "Having the abilities {abilities} prevents you from doing this.";
  public static readonly string ForbiddenEffects = "You can't proceed while affected by {effects}.";
  public static readonly string ForbiddenItems = "You must not be carrying any of these items {items}.";
  public static readonly string ForbiddenQuests = "Because you've completed {quests}, this path is no longer available.";
  public static readonly string Items = "You are missing the following items {items}.";
  public static readonly string Knowledge = "You need to know {knowledge} before continuing.";
  public static readonly string MaxLevel = "This is only available up to level {max}, but you're level {current}.";
  public static readonly string MaximumDays = "This is only available within {maximumDays} days of starting your journey.";
  public static readonly string MinLevel = "You need to be at least level {min}, but you're only level {current}.";
  public static readonly string MinimumDays = "You need to wait at least {minimumDays} days before doing this.";
  public static readonly string NPCReputation = "Your reputation with {npcs} isn't high enough.";
  public static readonly string Quests = "You must complete the quests {quests} before proceeding.";
  public static readonly string TimeOfDay = "This can only be done during {time}.";
  public static readonly string Weather = "The weather must be {weather} for this to happen.";
}