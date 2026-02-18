// src/features/plan/exercises/catalog.ts

export type ExerciseCategory = "strength" | "cardio" | "mobility" | "recovery";

export type EquipmentType = "bodyweight" | "dumbbell" | "band" | "chair" | "treadmill" | "bike";

export type ExerciseId =
  // Strength (bodyweight)
  | "push_up"
  | "glute_bridge"
  | "bodyweight_squat"
  | "step_ups"
  // Strength (dumbbell)
  | "goblet_squat"
  | "reverse_lunge"
  | "romanian_deadlift"
  | "bent_over_row"
  | "dumbbell_floor_press"
  | "overhead_press"
  | "arnold_press"
  | "lateral_raise"
  | "bicep_curl"
  | "hammer_curl"
  | "tricep_extension"
  | "overhead_tricep_extension"
  // Strength (band)
  | "band_row"
  | "band_bicep_curl"
  | "band_tricep_pressdown"
  // Core (bodyweight, categorized as strength)
  | "plank"
  | "side_plank"
  | "dead_bug"
  | "bird_dog"
  | "mountain_climber"
  | "russian_twist"
  // Cardio (bodyweight)
  | "brisk_walk"
  | "marching_in_place"
  | "jumping_jacks"
  | "high_knees"
  | "dance_cardio"
  // Cardio (chair)
  | "chair_cardio"
  // Cardio (equipment)
  | "treadmill_walk"
  | "treadmill_jog"
  | "cycling"
  // Mobility
  | "figure_4_stretch"
  | "hamstring_stretch"
  | "quad_stretch"
  | "calf_stretch"
  | "hip_flexor_stretch"
  | "chest_stretch"
  | "shoulder_stretch"
  | "childs_pose"
  | "cat_cow"
  | "gentle_yoga"
  // Recovery
  | "foam_roll"
  | "gentle_walk"
  | "supine_rest"
  | "legs_up_wall"
  | "breathing_exercise"
  | "meditation"
  | "knees_to_chest"
  | "supine_twist"
  | "reclined_bound_angle"
  | "supported_childs_pose"
  | "gentle_neck_stretch";

export type Exercise = {
  id: ExerciseId;
  name: string;
  category: ExerciseCategory;
  equipment: EquipmentType;
};

export const EXERCISES: Record<ExerciseId, Exercise> = {
  // --- Strength (bodyweight) ---
  push_up: {
    id: "push_up",
    name: "Push-Up",
    category: "strength",
    equipment: "bodyweight",
  },
  glute_bridge: {
    id: "glute_bridge",
    name: "Glute Bridge",
    category: "strength",
    equipment: "bodyweight",
  },
  bodyweight_squat: {
    id: "bodyweight_squat",
    name: "Bodyweight Squat",
    category: "strength",
    equipment: "bodyweight",
  },
  step_ups: {
    id: "step_ups",
    name: "Step-Ups",
    category: "strength",
    equipment: "bodyweight",
  },

  // --- Strength (dumbbell) ---
  goblet_squat: {
    id: "goblet_squat",
    name: "Goblet Squat",
    category: "strength",
    equipment: "dumbbell",
  },
  reverse_lunge: {
    id: "reverse_lunge",
    name: "Reverse Lunge",
    category: "strength",
    equipment: "dumbbell",
  },
  romanian_deadlift: {
    id: "romanian_deadlift",
    name: "Romanian Deadlift",
    category: "strength",
    equipment: "dumbbell",
  },
  bent_over_row: {
    id: "bent_over_row",
    name: "Bent-Over Row",
    category: "strength",
    equipment: "dumbbell",
  },
  dumbbell_floor_press: {
    id: "dumbbell_floor_press",
    name: "Dumbbell Floor Press",
    category: "strength",
    equipment: "dumbbell",
  },
  overhead_press: {
    id: "overhead_press",
    name: "Overhead Press",
    category: "strength",
    equipment: "dumbbell",
  },
  arnold_press: {
    id: "arnold_press",
    name: "Arnold Press",
    category: "strength",
    equipment: "dumbbell",
  },
  lateral_raise: {
    id: "lateral_raise",
    name: "Lateral Raise",
    category: "strength",
    equipment: "dumbbell",
  },
  bicep_curl: {
    id: "bicep_curl",
    name: "Bicep Curl",
    category: "strength",
    equipment: "dumbbell",
  },
  hammer_curl: {
    id: "hammer_curl",
    name: "Hammer Curl",
    category: "strength",
    equipment: "dumbbell",
  },
  tricep_extension: {
    id: "tricep_extension",
    name: "Tricep Extension",
    category: "strength",
    equipment: "dumbbell",
  },
  overhead_tricep_extension: {
    id: "overhead_tricep_extension",
    name: "Overhead Tricep Extension",
    category: "strength",
    equipment: "dumbbell",
  },

  // --- Strength (band) ---
  band_row: {
    id: "band_row",
    name: "Resistance Band Row",
    category: "strength",
    equipment: "band",
  },
  band_bicep_curl: {
    id: "band_bicep_curl",
    name: "Resistance Band Bicep Curl",
    category: "strength",
    equipment: "band",
  },
  band_tricep_pressdown: {
    id: "band_tricep_pressdown",
    name: "Resistance Band Tricep Pressdown",
    category: "strength",
    equipment: "band",
  },

  // --- Core (categorized as strength) ---
  plank: {
    id: "plank",
    name: "Plank",
    category: "strength",
    equipment: "bodyweight",
  },
  side_plank: {
    id: "side_plank",
    name: "Side Plank",
    category: "strength",
    equipment: "bodyweight",
  },
  dead_bug: {
    id: "dead_bug",
    name: "Dead Bug",
    category: "strength",
    equipment: "bodyweight",
  },
  bird_dog: {
    id: "bird_dog",
    name: "Bird Dog",
    category: "strength",
    equipment: "bodyweight",
  },
  mountain_climber: {
    id: "mountain_climber",
    name: "Mountain Climbers",
    category: "strength",
    equipment: "bodyweight",
  },
  russian_twist: {
    id: "russian_twist",
    name: "Russian Twists",
    category: "strength",
    equipment: "bodyweight",
  },

  // --- Cardio (bodyweight) ---
  brisk_walk: {
    id: "brisk_walk",
    name: "Brisk Walk",
    category: "cardio",
    equipment: "bodyweight",
  },
  marching_in_place: {
    id: "marching_in_place",
    name: "Marching in Place",
    category: "cardio",
    equipment: "bodyweight",
  },
  jumping_jacks: {
    id: "jumping_jacks",
    name: "Jumping Jacks",
    category: "cardio",
    equipment: "bodyweight",
  },
  high_knees: {
    id: "high_knees",
    name: "High Knees",
    category: "cardio",
    equipment: "bodyweight",
  },
  dance_cardio: {
    id: "dance_cardio",
    name: "Dance Cardio",
    category: "cardio",
    equipment: "bodyweight",
  },

  // --- Cardio (chair) ---
  chair_cardio: {
    id: "chair_cardio",
    name: "Chair Cardio",
    category: "cardio",
    equipment: "chair",
  },

  // --- Cardio (equipment) ---
  treadmill_walk: {
    id: "treadmill_walk",
    name: "Treadmill Walk",
    category: "cardio",
    equipment: "treadmill",
  },
  treadmill_jog: {
    id: "treadmill_jog",
    name: "Treadmill Jog",
    category: "cardio",
    equipment: "treadmill",
  },
  cycling: {
    id: "cycling",
    name: "Cycling",
    category: "cardio",
    equipment: "bike",
  },

  // --- Mobility ---
  figure_4_stretch: {
    id: "figure_4_stretch",
    name: "Figure 4 Stretch",
    category: "mobility",
    equipment: "bodyweight",
  },
  hamstring_stretch: {
    id: "hamstring_stretch",
    name: "Hamstring Stretch",
    category: "mobility",
    equipment: "bodyweight",
  },
  quad_stretch: {
    id: "quad_stretch",
    name: "Quad Stretch",
    category: "mobility",
    equipment: "bodyweight",
  },
  calf_stretch: {
    id: "calf_stretch",
    name: "Calf Stretch",
    category: "mobility",
    equipment: "bodyweight",
  },
  hip_flexor_stretch: {
    id: "hip_flexor_stretch",
    name: "Hip Flexor Stretch",
    category: "mobility",
    equipment: "bodyweight",
  },
  chest_stretch: {
    id: "chest_stretch",
    name: "Chest Stretch",
    category: "mobility",
    equipment: "bodyweight",
  },
  shoulder_stretch: {
    id: "shoulder_stretch",
    name: "Shoulder Stretch",
    category: "mobility",
    equipment: "bodyweight",
  },
  childs_pose: {
    id: "childs_pose",
    name: "Child’s Pose",
    category: "mobility",
    equipment: "bodyweight",
  },
  cat_cow: {
    id: "cat_cow",
    name: "Cat-Cow",
    category: "mobility",
    equipment: "bodyweight",
  },
  gentle_yoga: {
    id: "gentle_yoga",
    name: "Gentle Yoga",
    category: "mobility",
    equipment: "bodyweight",
  },

  // --- Recovery ---
  foam_roll: {
    id: "foam_roll",
    name: "Foam Rolling",
    category: "recovery",
    equipment: "bodyweight",
  },
  gentle_walk: {
    id: "gentle_walk",
    name: "Gentle Walk",
    category: "recovery",
    equipment: "bodyweight",
  },
  supine_rest: {
    id: "supine_rest",
    name: "Supine Rest",
    category: "recovery",
    equipment: "bodyweight",
  },
  legs_up_wall: {
    id: "legs_up_wall",
    name: "Legs Up the Wall",
    category: "recovery",
    equipment: "bodyweight",
  },
  breathing_exercise: {
    id: "breathing_exercise",
    name: "Deep Breathing",
    category: "recovery",
    equipment: "bodyweight",
  },
  meditation: {
    id: "meditation",
    name: "Meditation",
    category: "recovery",
    equipment: "bodyweight",
  },
  knees_to_chest: {
    id: "knees_to_chest",
    name: "Knees to Chest",
    category: "recovery",
    equipment: "bodyweight",
  },

  supine_twist: {
    id: "supine_twist",
    name: "Supine Twist",
    category: "recovery",
    equipment: "bodyweight",
  },

  reclined_bound_angle: {
    id: "reclined_bound_angle",
    name: "Reclined Bound Angle",
    category: "recovery",
    equipment: "bodyweight",
  },

  supported_childs_pose: {
    id: "supported_childs_pose",
    name: "Supported Child’s Pose",
    category: "recovery",
    equipment: "bodyweight",
  },

  gentle_neck_stretch: {
    id: "gentle_neck_stretch",
    name: "Gentle Neck Stretch",
    category: "recovery",
    equipment: "bodyweight",
  },
};
