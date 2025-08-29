namespace EchoesOfTheVeil.Components;

public struct Alignment {
  public int Value;
}

public struct RequiredAlignment {
  public int Value;
  public AlignmentOperator Operator;
}

public enum AlignmentOperator {
  Equal,
  Greater,
  Less,
  GreaterOrEqual,
  LessOrEqual
}