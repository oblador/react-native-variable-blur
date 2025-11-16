//
//  HybridVariableBlur.swift
//  Pods
//
//  Created by Joel Arvidsson on 11/16/2025.
//

import Foundation
import UIKit

class HybridVariableBlur : HybridVariableBlurSpec {
  // UIView
  var view: UIView = UIView()

  // Props
  var isRed: Bool = false {
    didSet {
      view.backgroundColor = isRed ? .red : .black
    }
  }
}
