/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  if (password == "") {
    return "weak";
  }
  else if (typeof(password) !== "string") {
    return "weak";
  }
  else if (password.length < 8) {
    if (/[A-Z]/.test(password)) {
      if (/[a-z]/.test(password)) {
        if (/[0-9]/.test(password)) {
          if (/[^a-zA-Z0-9]/.test(password)) {
            return "strong";
          }
          else {
            return "medium";
          }
        }
        else if (/[^a-zA-Z0-9]/.test(password)) {
          if (/[0-9]/.test(password)) {
            return "strong";
          } else {
            return "medium";
          }
        }
        else {
          return "medium";
        }
      }
      else if (/[0-9]/.test(password)) {
        if (/[a-z]/.test(password)) {
          if (/[^a-zA-Z0-9]/.test(password)) {
            return "strong";
          }
          else {
            return "medium";
          }
        }
        else if (/[^a-zA-Z0-9]/.test(password)) {
          if (/[a-z]/.test(password)) {
            return "strong";
          } else {
            return "medium";
          }
        }
        else {
          return "medium";
        }
      }
      else if (/[^a-zA-Z0-9]/.test(password)) {
        if (/[a-z]/.test(password)) {
          if (/[0-9]/.test(password)) {
            return "strong";
          }
          else {
            return "medium";
          }
        }
        else if (/[0-9]/.test(password)) {
          if (/[a-z]/.test(password)) {
            return "strong";
          } else {
            return "medium";
          }
        }
        else {
          return "medium";
        }
      }
      else {
        return "weak";
      }
    }
    else if (/[a-z]/.test(password)) {
      if (/[A-Z]/.test(password)) {
        if (/[0-9]/.test(password)) {
          if (/[^a-zA-Z0-9]/.test(password)) {
            return "strong";
          }
          else {
            return "medium";
          }
        }
        else if (/[^a-zA-Z0-9]/.test(password)) {
          if (/[0-9]/.test(password)) {
            return "strong";
          } else {
            return "medium";
          }
        }
        else {
          return "medium";
        }
      }
      else {
        return "weak";
      }
    }
    else if (/[0-9]/.test(password)) {
      if (/[A-Z]/.test(password)) {
        if (/[a-z]/.test(password)) {
          if (/[^a-zA-Z0-9]/.test(password)) {
            return "strong";
          }
          else {
            return "medium";
          }
        }
        else if (/[^a-zA-Z0-9]/.test(password)) {
          if (/[a-z]/.test(password)) {
            return "strong";
          } else {
            return "medium";
          }
        }
        else {
          return "medium";
        }
      }
      else {
        return "weak";
      }
    }
    else if (/[^a-zA-Z0-9]/.test(password)) {
      if (/[A-Z]/.test(password)) {
        if (/[0-9]/.test(password)) {
          if (/[a-z]/.test(password)) {
            return "strong";
          }
          else {
            return "medium";
          }
        }
        else if (/[a-z]/.test(password)) {
          if (/[0-9]/.test(password)) {
            return "strong";
          } else {
            return "medium";
          }
        }
        else {
          return "medium";
        }
      }
      else {
        return "weak";
      }
    }
  }
  else if (/[A-Z]/.test(password)) {
    if (password.length >= 8){
      if (/[a-z]/.test(password)) {
        if (/[0-9]/.test(password)) {
          if (/[^a-zA-Z0-9]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else if (/[^a-zA-Z0-9]/.test(password)) {
          if (/[0-9]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else {
          return "medium";
        }
      }
      else if (/[0-9]/.test(password)) {
        if (/[^a-zA-Z0-9]/.test(password)) {
          if (/[a-z]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else if (/[a-z]/.test(password)) {
          if (/[^a-zA-Z0-9]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else {
          return "medium";
        }
      }
      else if (/[^a-zA-Z0-9]/.test(password)) {
        if (/[a-z]/.test(password)) {
          if (/[0-9]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else if (/[0-9]/.test(password)) {
          if (/[a-z]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else {
          return "medium"
        }
      }
      else {
        return "medium";
      }
    }
    else if (/[a-z]/.test(password)) {
      if (/[^a-zA-Z0-9]/.test(password)) {
        if (/[0-9]/.test(password)) {
          if (password.length >= 8) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else if (password.length >= 8) {
          if (/[0-9]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else {
          return "medium";
        }
      }
      else if (/[0-9]/.test(password)) {
        if (/[^a-zA-Z0-9]/.test(password)) {
          if (password.length >= 8) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else if (password.length >= 8) {
          if (/[^a-zA-Z0-9]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else {
          return "medium";
        }
      }
      else if (password.length >= 8) {
        if (/[^a-zA-Z0-9]/.test(password)) {
          if (/[0-9]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else if (/[0-9]/.test(password)) {
          if (/[^a-zA-Z0-9]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else {
          return "medium";
        }
      }
      else {
        return "medium";
      }
    }
    else if (/[0-9]/.test(password)) {
      if (/[^a-zA-Z0-9]/.test(password)) {
        if (/[a-z]/.test(password)) {
          if (password.length >= 8) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else if (password.length >= 8) {
          if (/[a-z]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else {
          return "medium";
        }
      }
      else if (/[a-z]/.test(password)) {
        if (/[^a-zA-Z0-9]/.test(password)) {
          if (password.length >= 8) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else if (password.length >= 8) {
          if (/[^a-zA-Z0-9]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else {
          return "medium";
        }
      }
      else if (password.length >= 8) {
        if (/[^a-zA-Z0-9]/.test(password)) {
          if (/[a-z]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else if (/[a-z]/.test(password)) {
          if (/[^a-zA-Z0-9]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else {
          return "medium";
        }
      }
      else {
        return "medium";
      }
    }
    else if (/[^a-zA-Z0-9]/.test(password)) {
      if (/[a-z]/.test(password)) {
        if (password.length >= 8) {
          if (/[0-9]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else if (/[0-9]/.test(password)) {
          if (password.length >= 8) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else {
          return "medium";
        }
      }
      else if (/[0-9]/.test(password)) {
        if (password.length >= 8) {
          if (/[a-z]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else if (/[a-z]/.test(password)) {
          if (password.length >= 8) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else {
          return "medium";
        }
      }
      else if (password.length >= 8) {
        if (/[a-z]/.test(password)) {
          if (/[0-9]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else if (/[0-9]/.test(password)) {
          if (/[a-z]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else {
          return "medium";
        }
      }
      else {
        return "medium";
      }
    }
    else {
      return "weak";
    }
  }
  else if (/[a-z]/.test(password)) {
    if (password.length >= 8) {
      if (/[^a-zA-Z0-9]/.test(password)) {
        if (/[0-9]/.test(password)) {
          if (/[A-Z]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else if (/[A-Z]/.test(password)) {
          if (/[0-9]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else {
          return "medium";
        }
      }
      else if (/[A-Z]/.test(password)) {
        if (/[^a-zA-Z0-9]/.test(password)) {
          if (/[0-9]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else if (/[0-9]/.test(password)) {
          if (/[^a-zA-Z0-9]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else {
          return "medium";
        }
      }
      else if (/[0-9]/.test(password)) {
        if (/[^a-zA-Z0-9]/.test(password)) {
          if (/[A-Z]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else if (/[A-Z]/.test(password)) {
          if (/[^a-zA-Z0-9]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else {
          return "medium";
        }
      }
      else {
        return "medium";
      }
    }
    else if (/[A-Z]/.test(password)) {
      if (/[^a-zA-Z0-9]/.test(password)) {
        if (/[0-9]/.test(password)) {
          if (password.length >= 8) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else if (password.length >= 8) {
          if (/[0-9]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else {
          return "medium";
        }
      }
      else if (/[0-9]/.test(password)) {
        if (/[^a-zA-Z0-9]/.test(password)) {
          if (password.length >= 8) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else if (password.length >= 8) {
          if (/[^a-zA-Z0-9]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else {
          return "medium";
        }
      }
      else if (password.length >= 8) {
        if (/[^a-zA-Z0-9]/.test(password)) {
          if (/[0-9]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else if (/[0-9]/.test(password)) {
          if (/[^a-zA-Z0-9]/.test(password)) {
            return "very strong";
          } else {
            return "storng";
          }
        }
        else {
          return "medium";
        }
      }
      else {
        return "medium";
      }
    }
    else if (/[^a-zA-Z0-9]/.test(password)) {
      if (/[0-9]/.test(password)) {
        if (/[A-Z]/.test(password)) {
          if (password.length >= 8) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else if (password.length >= 8) {
          if (/[A-Z]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else {
          return "medium";
        }
      }
      else if (/[A-Z]/.test(password)) {
        if (/[0-9]/.test(password)) {
          if (password.length) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else if (password.length) {
          if (/[0-9]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else {
          return "medium";
        }
      }
      else if (password.length >= 8) {
        
      }
      else {
        return "medium";
      }
    }
    else if (/[0-9]/.test(password)) {
      if (/[^a-zA-Z0-9]/.test(password)) {
        if (/[A-Z]/.test(password)) {
          if (password.length >= 8) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else if (password.length) {
          if (/[A-Z]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else {
          return "medium";
        }
      }
      else if (/[A-Z]/.test(password)) {
        if (/[^a-zA-Z0-9]/.test(password)) {
          if (password.length >= 8) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else if (password.length >= 8) {
          if (/[^a-zA-Z0-9]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else {
          return "medium";
        }
      }
      else if (password.length >= 8) {
        if (/[0-9]/.test(password)) {
          if (/[A-Z]/.test(password)) {
            return "very strong";
          }
          else {
            return "strong";
          }
        }
        else if (/[A-Z]/.test(password)) {
          if (/[0-9]/.test(password)) {
            return "very strong";
          } else {
            return "strong";
          }
        }
        else {
          return "medium";
        }
      }
      else {
        return "medium";
      }
    }
    else {
      return "weak";
    }
  }
  else if (/[0-9]/.test(password)) {
    if (/[^a-zA-Z0-9]/.test(password)) {
      
    }
    else if (/[A-Z]/.test(password)) {
      
    }
    else if (/[a-z]/.test(password)) {
      
    }
    else if (password.length >= 8) {
      
    }
    else {
      return "weak";
    }
  }
  else if (/[^a-zA-Z0-9]/.test(password)) {
    if (password.length >= 8) {
      
    }
    else if (/[A-Z]/.test(password)) {
      
    }
    else if (/[a-z]/.test(password)) {
      
    }
    else if (/[0-9]/.test(password)) {
      
    }
    else {
      return "weak";
    }
  }
}
