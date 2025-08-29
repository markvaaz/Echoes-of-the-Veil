// /**
//  * TODO: Refactor
//  * PS: I probably won't do it.
//  */
// export default class Requirements extends Prefab {
//   MinimumLevel: number | null;
//   MaximumLevel: number | null;
//   TimeOfDay: string | null;
//   Weather: string | null;
//   MinimumDays: number | null;
//   MaximumDays: number | null;
//   MinimumAttributes: AttributeLevels | null;
//   MaximumAttributes: AttributeLevels | null;
//   Alignment: RequiredAlignment | null;

//   Items: RequiredItemAmount[] | null;
//   AnyItems: RequiredItemAmount[] | null;
//   EquippedItems: GUID[] | null;
//   EquippedAnyItems: GUID[] | null;
//   AnyClasses: GUID[] | null;
//   Abilities: GUID[] | null;
//   Effects: GUID[] | null;
//   Quests: GUID[] | null;
//   NPCReputationList: NPCReputation[] | null;
//   Knowledge: GUID[] | null;
//   ForbiddenClasses: GUID[] | null;
//   ForbiddenEffects: GUID[] | null;
//   ForbiddenQuests: GUID[] | null;
//   ForbiddenAbilities: GUID[] | null;
//   ForbiddenItems: GUID[] | null;
//   ForbiddenEquippedItems: GUID[] | null;

//   FailureReason: string | null;
//   FailureReasons = new RequirementsFailureReasons();

//   LoadData(data: any = {}) {
//     const keys = Object.keys(data);
//     function addGUIDs(arr: []) {
//       return arr.map((item: any) => {
//         if (item.GUID) {
//           item.GUID = new GUID(item.GUID);
//           return item;
//         } else if (typeof item === "number") {
//           return new GUID(item);
//         }
//       });
//     }

//     for (const key of keys) {
//       if (keys[key] && !Array.isArray(keys[key]))
//         this[key] = data[key];

//       if (keys[key] && Array.isArray(keys[key])) {
//         this[key] = addGUIDs(keys[key] as []);
//       }
//     }
//   }

//   Pass(character: Character): boolean {
//     const checks: [keyof this, (char: Character) => boolean][] = [
//       ["Items", this.#PassItems],
//       ["AnyItems", this.#PassAnyItems],
//       ["MinimumLevel", this.#PassMinLevel],
//       ["MaximumLevel", this.#PassMaxLevel],
//       ["MinimumAttributes", this.#PassMinimumAttributes],
//       ["MaximumAttributes", this.#PassMaximumAttributes],
//       ["AnyClasses", this.#PassAnyClasses],
//       ["Abilities", this.#PassAbilities],
//       ["Effects", this.#PassEffects],
//       ["Quests", this.#PassQuests],
//       ["TimeOfDay", this.#PassTimeOfDay],
//       ["Weather", this.#PassWeather],
//       ["Alignment", this.#PassAlignment],
//       ["NPCReputationList", this.#PassNPCReputation],
//       ["Knowledge", this.#PassKnowledge],
//       ["ForbiddenClasses", this.#PassForbiddenClasses],
//       ["ForbiddenEffects", this.#PassForbiddenEffects],
//       ["ForbiddenAbilities", this.#PassForbiddenAbilities],
//       ["ForbiddenItems", this.#PassForbiddenItems],
//       ["ForbiddenQuests", this.#PassForbiddenQuests],
//       ["MinimumDays", this.#PassMinimumDays],
//       ["MaximumDays", this.#PassMaximumDays],
//       ["EquippedItems", this.#PassEquippedItems],
//       ["ForbiddenEquippedItems", this.#PassForbiddenEquippedItems],
//       ["EquippedAnyItems", this.#PassEquippedAnyItems],
//     ];

//     for (const [key, checkFn] of checks) {
//       if (this[key] !== null && !checkFn.call(this, character)) {
//         return false;
//       }
//     }

//     return true;
//   }

//   SetFailureReason(message: string) {
//     this.FailureReason = message;
//   }

//   SetFailureReasonMessage(requirementName: string, message: string) {
//     if (!this.FailureReasons[requirementName]) return;

//     this.FailureReasons[requirementName] = message;
//   }

//   #PassAbilities(character: Character): boolean {
//     const missing = this.Abilities.filter(ability => !character.Class.HasAbility(ability));

//     if (missing.length > 0) {
//       const names = missing.map(a => World.GetByGUID(a)[0].Name).join(", ");
//       this.SetFailureReason(
//         this.FailureReasons.Abilities.replace("{abilities}", names)
//       );
//       return false;
//     }

//     return true;
//   }

//   #PassAlignment(character: Character): boolean {
//     const Operator = this.Alignment.Operator;
//     const Value = this.Alignment.Value;
//     const current = character.Alignment;

//     let pass = false;
//     switch (Operator) {
//       case ">": pass = current > Value; break;
//       case "<": pass = current < Value; break;
//       case "=": pass = current === Value; break;
//     }

//     if (!pass) {
//       this.SetFailureReason(
//         this.FailureReasons.Alignment
//           .replace("{operator}", Operator === ">" ? "greater than" : Operator === "<" ? "less than" : "equal to")
//           .replace("{required}", Value.toString())
//           .replace("{current}", current.toString())
//       );
//     }

//     return pass;
//   }

//   #PassItems(character: Character): boolean {
//     const missing = this.Items.filter(item => !character.Inventory.HasItem(item.GUID));

//     if (missing.length > 0) {
//       const names = missing.map(item => World.GetByGUID(item.GUID)[0].Name).join(", ");
//       this.SetFailureReasonMessage("Items", this.FailureReasons.Items.replace("{items}", names));
//       return false;
//     }

//     return true;
//   }

//   #PassAnyItems(character: Character): boolean {
//     for (const item of this.AnyItems) {
//       if (character.Inventory.HasItem(item.GUID)) {
//         return true;
//       }
//     }

//     const itemNames = this.AnyItems.map(item => World.GetByGUID(item.GUID)[0].Name).join(", ");
//     this.SetFailureReasonMessage("AnyItems", this.FailureReasons.AnyItems.replace("{items}", itemNames));
//     return false;
//   }

//   #PassEquippedAnyItems(character: Character): boolean {
//     for (const item of this.EquippedAnyItems) {
//       if (character.Inventory.HasEquipped(item)) {
//         return true;
//       }
//     }

//     const itemNames = this.EquippedAnyItems.map(item => World.GetByGUID(item)[0].Name).join(", ");
//     this.SetFailureReasonMessage("EquippedAnyItems", this.FailureReasons.EquippedAnyItems.replace("{items}", itemNames));
//     return false;
//   }

//   #PassEquippedItems(character: Character): boolean {
//     const missing = this.EquippedItems.filter(equip => !character.Inventory.HasEquipped(equip));

//     if (missing.length > 0) {
//       const names = missing.map(guid => World.GetByGUID(guid)[0].Name).join(", ");
//       this.SetFailureReason(
//         this.FailureReasons.EquippedItems?.replace("{items}", names) ??
//         `You must have the following items equipped: ${names}`
//       );
//       return false;
//     }

//     return true;
//   }

//   #PassForbiddenEquippedItems(character: Character): boolean {
//     const forbidden = this.ForbiddenEquippedItems.filter(guid => character.Inventory.HasEquipped(guid));

//     if (forbidden.length > 0) {
//       const names = forbidden.map(guid => World.GetByGUID(guid)[0].Name).join(", ");
//       this.SetFailureReason(
//         this.FailureReasons.ForbiddenEquippedItems?.replace("{items}", names) ??
//         `You must not have the following items equipped: ${names}`
//       );
//       return false;
//     }

//     return true;
//   }

//   #PassMinimumAttributes(character: Character): boolean {
//     const failed: string[] = [];

//     for (const attribute in this.MinimumAttributes) {
//       const required = this.MinimumAttributes[attribute];
//       const current = character.Attributes[attribute];

//       if (required > current) {
//         failed.push(`${attribute} (${current}/${required})`);
//       }
//     }

//     if (failed.length > 0) {
//       this.SetFailureReason(
//         this.FailureReasons.MinimumAttributes.replace("{attributes}", failed.join(", "))
//       );
//       return false;
//     }

//     return true;
//   }

//   #PassMaximumAttributes(character: Character): boolean {
//     const failed: string[] = [];

//     for (const attribute in this.MaximumAttributes) {
//       const required = this.MaximumAttributes[attribute];
//       const current = character.Attributes[attribute];

//       if (required < current) {
//         failed.push(`${attribute} (${current}/${required})`);
//       }
//     }

//     if (failed.length > 0) {
//       this.SetFailureReason(
//         this.FailureReasons.MaximumAttributes.replace("{attributes}", failed.join(", "))
//       );
//       return false;
//     }

//     return true;
//   }

//   #PassAnyClasses(character: Character): boolean {
//     for (const GUID of this.AnyClasses) {
//       if (character.Class.id === GUID) {
//         return true;
//       }
//     }

//     const classNames = this.AnyClasses.map(guid => World.GetByGUID(guid)[0].Name).join(", ");
//     this.SetFailureReasonMessage("AnyClasses", this.FailureReasons.AnyClasses.replace("{classes}", classNames));
//     return false;
//   }

//   #PassEffects(character: Character): boolean {
//     const missing = this.Effects.filter(effect => !character.HasEffect(effect));

//     if (missing.length > 0) {
//       const names = missing.map(e => World.GetByGUID(e)[0].Name).join(", ");
//       this.SetFailureReason(
//         this.FailureReasons.Effects.replace("{effects}", names)
//       );
//       return false;
//     }

//     return true;
//   }

//   #PassForbiddenClasses(character: Character): boolean {
//     const forbidden = this.ForbiddenClasses.filter(guid => character.Class.id === guid);

//     if (forbidden.length > 0) {
//       this.SetFailureReason(
//         this.FailureReasons.ForbiddenClasses.replace("{currentClass}", character.Class.Name)
//       );
//       return false;
//     }

//     return true;
//   }

//   #PassForbiddenAbilities(character: Character): boolean {
//     const forbidden = this.ForbiddenAbilities.filter(guid => character.Class.HasAbility(guid));

//     if (forbidden.length > 0) {
//       const names = forbidden.map(guid => World.GetByGUID(guid)[0].Name).join(", ");
//       this.SetFailureReason(
//         this.FailureReasons.ForbiddenAbilities.replace("{abilities}", names)
//       );
//       return false;
//     }

//     return true;
//   }

//   #PassForbiddenEffects(character: Character): boolean {
//     const forbidden = this.ForbiddenEffects.filter(guid => character.HasEffect(guid));

//     if (forbidden.length > 0) {
//       const names = forbidden.map(guid => World.GetByGUID(guid)[0].Name).join(", ");
//       this.SetFailureReason(
//         this.FailureReasons.ForbiddenEffects.replace("{effects}", names)
//       );
//       return false;
//     }

//     return true;
//   }

//   #PassForbiddenItems(character: Character): boolean {
//     const forbidden = this.ForbiddenItems.filter(guid => character.Inventory.HasItem(guid));

//     if (forbidden.length > 0) {
//       const names = forbidden.map(guid => World.GetByGUID(guid)[0].Name).join(", ");
//       this.SetFailureReason(
//         this.FailureReasons.ForbiddenItems.replace("{items}", names)
//       );
//       return false;
//     }

//     return true;
//   }

//   #PassForbiddenQuests(character: Character): boolean {
//     const forbidden = this.ForbiddenQuests.filter(guid => character.CompletedQuests.has(guid));

//     if (forbidden.length > 0) {
//       const names = forbidden.map(guid => World.GetByGUID(guid)[0].Name).join(", ");
//       this.SetFailureReason(
//         this.FailureReasons.ForbiddenQuests.replace("{quests}", names)
//       );
//       return false;
//     }

//     return true;
//   }

//   #PassKnowledge(character: Character): boolean {
//     const missing = this.Knowledge.filter(guid => !character.Knowledge.has(guid));

//     if (missing.length > 0) {
//       const names = missing.map(guid => World.GetByGUID(guid)[0].Name).join(", ");
//       this.SetFailureReasonMessage("Knowledge",
//         this.FailureReasons.Knowledge.replace("{knowledge}", names)
//       );
//       return false;
//     }

//     return true;
//   }

//   #PassMaxLevel(character: Character): boolean {
//     const pass = character.Level <= this.MaximumLevel;

//     if (!pass) {
//       const template = this.FailureReasons?.MaxLevel;
//       this.SetFailureReason(
//         template.replaceAll("{maxLevel}", this.MaximumLevel.toString())
//           .replaceAll("{currentLevel}", character.Level.toString())
//       );
//     }

//     return pass;
//   }

//   #PassMinLevel(character: Character): boolean {
//     const pass = character.Level >= this.MinimumLevel;

//     if (!pass) {
//       const template = this.FailureReasons.MinLevel;
//       this.SetFailureReason(
//         template.replaceAll("{minLevel}", this.MinimumLevel.toString())
//           .replaceAll("{currentLevel}", character.Level.toString())
//       );
//     }

//     return pass;
//   }

//   #PassMinimumDays(): boolean {
//     const currentDay = Time.GetDayCount();
//     const pass = currentDay >= this.MinimumDays;

//     if (!pass) {
//       const template = this.FailureReasons.MinimumDays;
//       this.SetFailureReason(
//         template.replaceAll("{minimumDays}", this.MinimumDays.toString())
//           .replaceAll("{currentDay}", currentDay.toString())
//       );
//     }

//     return pass;
//   }


//   #PassMaximumDays(): boolean {
//     const currentDays = Time.GetDayCount();
//     const pass = currentDays <= this.MaximumDays;

//     if (!pass) {
//       const template = this.FailureReasons.MaximumDays;
//       this.SetFailureReason(
//         template.replaceAll("{maximumDays}", this.MaximumDays.toLocaleString())
//           .replaceAll("{currentDays}", currentDays.toLocaleString())
//       );
//     }

//     return pass;
//   }

//   #PassWeather(): boolean {
//     const currentWeather = Time.GetWeather().name;
//     const pass = currentWeather === this.Weather;

//     if (!pass) {
//       const template = this.FailureReasons.Weather;
//       this.SetFailureReason(
//         template.replaceAll("{weather}", (this.Weather))
//           .replaceAll("{currentWeather}", currentWeather)
//       );
//     }

//     return pass;
//   }

//   #PassTimeOfDay(): boolean {
//     const currentTime = Time.GetTimeOfDay();
//     const pass = currentTime === this.TimeOfDay;

//     if (!pass) {
//       const template = this.FailureReasons.TimeOfDay;
//       this.SetFailureReason(
//         template.replaceAll("{time}", this.TimeOfDay)
//           .replaceAll("{currentTime}", currentTime)
//       );
//     }

//     return pass;
//   }

//   #PassNPCReputation(character: Character): boolean {
//     const failed = this.NPCReputationList.filter(req => {
//       const reputation = character.NPCReputationList.get(req.GUID);
//       return !reputation || reputation.Reputation < req.Reputation;
//     });

//     if (failed.length > 0) {
//       const names = failed
//         .map(npc => `${World.GetByGUID(npc.GUID)[0].Name} (${npc.Reputation})`)
//         .join(", ");

//       this.SetFailureReasonMessage("NPCReputation",
//         this.FailureReasons.NPCReputation.replace("{npc}", names)
//       );

//       return false;
//     }

//     return true;
//   }

//   #PassQuests(character: Character): boolean {
//     const missing = this.Quests.filter(guid => !character.CompletedQuests.has(guid));

//     if (missing.length > 0) {
//       const names = missing.map(guid => World.GetByGUID(guid)[0].Name).join(", ");
//       this.SetFailureReasonMessage(
//         "Quests",
//         this.FailureReasons.Quests.replace("{quest}", names)
//       );
//       return false;
//     }

//     return true;
//   }
// }