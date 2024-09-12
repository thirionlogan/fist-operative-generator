declare type Trait = {
  index: number;
  description: string;
  equipment: string;
  modifiers?: {
    key: string;
    value: number;
  };
};

export default Trait;
