namespace EchoesOfTheVeil.Components;

public struct Alignment {
  public int Value;
}

public enum AlignmentOperator {
  Equal,
  Greater,
  Less,
  GreaterOrEqual,
  LessOrEqual
}
public struct RequiredAlignment {
  public int Value;
  public AlignmentOperator Operator;
}