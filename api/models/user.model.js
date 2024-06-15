import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKsAAACUCAMAAADbGilTAAAATlBMVEX///9+fX3y8vKJh4d7enp4d3dycXH5+fns7Ozk5ORtbGzPz8+CgYGUk5P8/PyamZnY2Niop6ehoKCOjY2urq68u7vBwcHf3t7Hx8e0tLTXZqCsAAAEdElEQVR4nO2c65KrKhBGAwIKiuItmvd/0YPRJGYnRgVsxjqsn1N7an/V6TuduVwCgUAgEAgEAuch9y1gC1hdy6KQtSyK8qqwbzlL5IkqkRCMUjJAKRMClSr5ezaO0yZilKB3CGVRmca+xb3T1+hD6EMuqnvf8l7EKWXfhU5yGf0rtlXVgknnxq2Ub5kDLaIrSgcoan0LvSSSbVA6wGTiVyrPthh1Mm3EfUrtojVPnUOizp9U9TP8v4hl3iKMr8b/h1jqyQ34LgeYxPrxWVxvD6sXtPbR0FRbk9U7rIKXmppJ1WJTaKmJgbOOkAi4JuSNibOO0Aa2peWmVr1bFjYXVOZm1YYFDS8uLKQiJCANW9qYVRu2hJOaZFZSEcrgUsHVzqzasFcoqbGlCwxOADV/mdeBB3D1QJmW1xdgjezN1gW0E9yAtBYOtBYwUvPM1l21w2YwPQG2N6s2LEzLndgV2BEBkwg6J1phxm8HKQssaRlPL29aYSaZM2k9kw+cKbbOlLPOVAvOVGMv0oFWCSP10jros6BeD5QDrVC9Nrd2WJJBbQhyB7Mh2Eqrt7Yr3KvnmXYZZ9oRnWr3ZjfKQg2xE2faFZ9pB2+TCiCTwMiJ3ox03jJ8i4PMVw/O9MZ5prdjPSSi3W/yyNu1g9opliCP10RqVydLMq+HT3xHgNHa622OrgmbzwhY5e3mqZv+57zfdPVCaD9V1gQ6vHgpnnHCJVlzBErk4/NXSJSQvhBfM6oj5VEs47ReuX2sn7ePqY5Gml3BTiG5vH/shDxfKnGfMbJwU0pY1j9r1fX+rwiVMKaNb+Khah4uXRUR+o9eon8SVS//fAUiETcA0/J54NN61jQlaSPR2w00kk06C/50nuBYdbhp1fuxI0HlrBfJcdL1TSEjFMmi6bsEz7pqXL5XOXpwZcjbj2xKRbulc8Kt+EgWoj1wQIi/Ti4satc+Tt5G30oGbY5z2oXpldCo/PV5qjJaqBeHTbRYLqZ8nZjorcOfVopxd6NL6WwQKw9pvZNlqaMrsKxqU8UxjvNLHmPMVdpWGfvdL9BDLqNXpA7W1elqyABFVVXFkA3uP1iBut9w462bFvJi2y/QwrEb2K9cf4h1vIx1cDbyQ6zTg5LUxfPbMsLheqOz3Q2vkTnrv7GDB63fEGdp9sC4euBq032ws44IJ02X/UXeFtxc7VlshfdAG3upDh40N4q194L1NsCVVuvGwMkhzjZsF9746CowJ7NLstbXznuwu4w+vmLNsatePaRZtWEtnr9zsCQwaZXmnSyHSwIjzHwX4+DYeR/mMziGDKwRYhpdoAlrxDRtxZUHu1ZmWyOTd0FrrYbviim8C2gnMGoKbM4ZLLQaHUJgDy4wOIFJJkigC8EIM5llADvXN60mDmv1VU1zjL7kufs4wA0E7Zea+zGrNuz+RMC9ad1fDbxUgrvW/cHloXGZtO5vX85k19jBtwhMIJlBp6XE7j8z4kApNVsY4rKOoKlL08EgxtD8kT9dFQgEAoFAIBAI/L/4D9WCQM631/N1AAAAAElFTkSuQmCC",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
