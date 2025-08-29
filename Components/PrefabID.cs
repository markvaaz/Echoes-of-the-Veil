using System.Linq;

namespace EchoesOfTheVeil.Components;

public struct PrefabID {
  private static readonly Random _rand = new();
  public int Value;
  public static implicit operator int(PrefabID prefabID) => prefabID.Value;
  public static implicit operator PrefabID(int prefabID) => new(prefabID);

  public PrefabID() {
    Value = GenId();
  }

  public PrefabID(int prefabID) {
    Value = prefabID;
  }

  public static PrefabID[] ParseArray(int[] array) {
    if (array == null || array.Length == 0) return [];
    return [.. array.Select(PrefabID => new PrefabID(PrefabID))];
  }

  private static int GenId() {
    var length = _rand.Next(8, 13);
    int min = (int)Math.Pow(10, length - 1);
    int max = (int)Math.Pow(10, length) - 1;
    int value = _rand.Next(min, max + 1);
    return _rand.NextDouble() < 0.5 ? -value : value;
  }
}