"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { gsap } from "gsap"
import Navbar from "./Navbar"
import InfoPanel from "./InfoPanel"
import LoadingScreen from "./LoadingScreen"

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("about")
  const [cameraPosition, setCameraPosition] = useState({ x: 5, y: 2, z: 5 })

  // Hector Miranda's data
  const experienceData = {
    about: {
      name: "Hector Miranda",
      title: "Senior Software Engineer & Architect",
      email: "marcetux@gmail.com",
      phone: "714-855-6973",
      location: "Los Angeles, CA",
      github: "https://github.com/hectorMiranda",
      linkedin: "https://www.linkedin.com/in/hectormiranda/",
      summary:
        "Senior Software Engineer & Architect with expertise in real-time web applications, C#/.NET Core, React, WebSockets, and gRPC. Specializes in low-latency data streaming, scalable architectures, and performant UI development. Experienced in leading full software development life cycles for fintech and enterprise solutions.",
    },
    skills: [
      { name: "JavaScript/React/Angular", level: 0.9, category: "Frontend" },
      { name: "C#/.NET Core", level: 0.95, category: "Backend" },
      { name: "Python", level: 0.8, category: "Backend" },
      { name: "WebSockets/SignalR", level: 0.9, category: "Real-Time" },
      { name: "RESTful APIs/gRPC", level: 0.85, category: "Backend" },
      { name: "Azure/AWS", level: 0.8, category: "Infrastructure" },
      { name: "Kubernetes/Docker", level: 0.75, category: "DevOps" },
      { name: "Blockchain/Smart Contracts", level: 0.7, category: "Specialized" },
      { name: "Solidworks/Eagle", level: 0.6, category: "CAD" },
      { name: "Robotics/Electronics", level: 0.65, category: "Current Focus" },
    ],
    experience: [
      {
        role: "Solutions Architect, Blockchain",
        company: "CasperLabs",
        period: "March 2022 - November 2023",
        description:
          "Designed and implemented high-performance blockchain solutions, optimizing smart contract execution on the Casper Network. Led rapid prototyping of decentralized applications (dApps) and blockchain integrations.",
        technologies: ["Rust", "Node.js", "AWS", "Azure", "IBM Cloud", "Casper Blockchain", "IBM WatsonX APIs"],
      },
      {
        role: "VP/Solutions Architect",
        company: "City National Bank",
        period: "September 2018 - May 2021",
        description:
          "Provided mentoring and guidance on technical and architectural direction for various Enterprise Architecture initiatives. Solutions Architect for multiple projects including Account Services Manager, API Enablement Team, and TSYS TS2 Migration.",
        technologies: [
          "Azure",
          "C#",
          ".NET Core",
          "RAML",
          "Mulesoft",
          "RESTful APIs",
          "Dynatrace",
          "Splunk",
          "Akana",
          "Azure DevOps",
          "AKS",
        ],
      },
      {
        role: "Senior Software Engineer",
        company: "Corporate Travel Management",
        period: "May 2018 - September 2018",
        description:
          "Designed and implemented a new payment microservice using .NET Core, Azure, and the Paypal SDK. Created administration panel using Angular 6 and migrated legacy data from MySQL to SQL Server.",
        technologies: [".NET Core", "Azure", "VSTS", "Paypal SDK", "SQL Server", "MySQL", "Angular 6"],
      },
      {
        role: "Chief Technology Officer",
        company: "Go RN, LLC",
        period: "August 2017 - April 2018",
        description:
          "Provided leadership for the continued development of an innovative, robust, and secure scheduling platform. Responsible for the administration of the Go RN Platform running on AWS.",
        technologies: [
          "Node.js",
          "AWS",
          "RDS",
          "EC2",
          "S3",
          "Lambda",
          "API Gateway",
          "Cloudwatch",
          "KeyMetrics",
          "Phonegap",
          "Angular 5",
          "Knockout",
          "Android",
          "iOS",
          "Git",
        ],
      },
      {
        role: "Senior Software Engineer",
        company: "JibJab Bros. Studios",
        period: "August 2015 - July 2016",
        description:
          "Designed and implemented the JibJab Payment API to allow Apple in-app purchases. Created monitoring dashboards using Dashing.io, AWS, Nagios, Sumo Logic, and New Relic APIs.",
        technologies: [
          "REST",
          "Ruby on Rails",
          "PostgreSQL",
          "Capistrano",
          "FFMPEG",
          "bash",
          "Memcached",
          "EC2",
          "SQS",
          "S3",
          "Route53",
          "Docker",
          "Akamai",
          "SumoLogic",
          "New Relic",
          "NGINX",
          "Ubuntu",
          "JIRA",
          "AGILE",
        ],
      },
      {
        role: "Lead Software Engineer",
        company: "Verizon Digital Media (Edgecast)",
        period: "October 2011 - June 2014",
        description:
          "Responsible for consolidating requirements and solution architecture and coordinating the development and support of Edgecast management consoles and bandwidth reporting.",
        technologies: [
          "C#",
          "REST",
          "Windows Services",
          "ASP.Net WebForms/MVC",
          "WCF",
          "SQL Server",
          "Python",
          "Jenkins",
          "Octopus",
          "Twilio",
          "Git",
        ],
      },
      {
        role: "Senior Software Engineer",
        company: "MySpace Inc.",
        period: "January 2009 - January 2011",
        description:
          "Backend developer for the MySpace Recommendations Engine, which supported user-user collaborative filtering, content-based recommenders, and a non-personalized recommender based on summary statistics and product association rules.",
        technologies: [
          "C#",
          "REST",
          "Windows Services",
          "WCF",
          "SQL Server",
          "BerkeleyDB",
          "XML",
          "Consistent Hashing",
          "Recommendations",
          "collaborative filtering",
          "JIRA",
          "AGILE",
          "Team Foundation Server",
        ],
      },
    ],
    projects: [
      {
        name: "Blockchain Solutions",
        description:
          "Designed and implemented high-performance blockchain solutions on the Casper Network, optimizing smart contract execution and developing decentralized applications.",
        technologies: ["Rust", "Node.js", "Blockchain", "Smart Contracts", "Cloud Architecture"],
      },
      {
        name: "API Enablement Platform",
        description:
          "Led the API Enablement Team at City National Bank, assessing integration capabilities, IT modernization strategies, and establishing operational models for the entire bank.",
        technologies: ["Azure", "C#", ".NET Core", "RESTful APIs", "Mulesoft", "API Management"],
      },
      {
        name: "Payment Microservice",
        description:
          "Designed and implemented a new payment microservice using .NET Core, Azure, and the Paypal SDK for Corporate Travel Management.",
        technologies: [".NET Core", "Azure", "Paypal SDK", "Microservices", "SQL Server"],
      },
      {
        name: "Go RN Scheduling Platform",
        description:
          "Led the development of an innovative, robust, and secure scheduling platform for healthcare professionals, including mobile apps for Android and iOS.",
        technologies: ["Node.js", "AWS", "Angular", "Phonegap", "Mobile Development"],
      },
      {
        name: "Recommendations Engine",
        description:
          "Developed the MySpace Recommendations Engine, supporting user-user collaborative filtering, content-based recommenders, and non-personalized recommenders.",
        technologies: ["C#", "Algorithms", "Collaborative Filtering", "Data Processing", "Performance Optimization"],
      },
    ],
    education: [
      {
        institution: "Pasadena City College",
        degree: "Studying Robotics, Electronics, and Music Technology",
        period: "Spring 2024 - Current",
        description:
          "Coursework includes hands-on experience with microcontrollers, sensors, CAD tools, and 3D printing, with a strong emphasis on integrating AI and Python-based control systems into robotics projects.",
      },
      {
        institution: "University of Veracruz, Mexico",
        degree: "Bachelor of Science in Computer Science and Engineering",
        period: "Completed",
        description: "",
      },
    ],
    achievements: [
      {
        title: "Microsoft Certified: Azure Solutions Architect Expert",
        description:
          "Professional certification demonstrating expertise in designing and implementing solutions on Microsoft Azure.",
      },
      {
        title: "Verizon Walden Cup",
        description:
          "At Verizon Digital Media (Edgecast), awarded the Walden Cup for completing the development of the RESTful APIs required to migrate configuration settings between Microsoft and Edgecast.",
      },
      {
        title: "EnCorps.org Volunteer",
        description:
          "Computer Science Tutor volunteer at John C Fremont High School, providing one-on-one and small group tutoring in computer science fundamentals.",
      },
    ],
  }

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0a0a0a)

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z)

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    containerRef.current.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.minDistance = 3
    controls.maxDistance = 10
    controls.maxPolarAngle = Math.PI / 2 - 0.1

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 5, 5)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 2048
    directionalLight.shadow.mapSize.height = 2048
    scene.add(directionalLight)

    // Grid helper
    const gridHelper = new THREE.GridHelper(20, 20, 0x555555, 0x333333)
    scene.add(gridHelper)

    // Create 3D objects

    // Central platform
    const platformGeometry = new THREE.CylinderGeometry(5, 5, 0.5, 32)
    const platformMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333,
      metalness: 0.8,
      roughness: 0.2,
    })
    const platform = new THREE.Mesh(platformGeometry, platformMaterial)
    platform.position.y = -0.25
    platform.receiveShadow = true
    scene.add(platform)

    // About section - central hologram
    const aboutGroup = new THREE.Group()
    scene.add(aboutGroup)

    // Create holographic profile
    const hologramGeometry = new THREE.CylinderGeometry(1.5, 1.5, 3, 32, 1, true)
    const hologramMaterial = new THREE.MeshStandardMaterial({
      color: 0x4a88ff,
      emissive: 0x1a28ff,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
    })
    const hologram = new THREE.Mesh(hologramGeometry, hologramMaterial)
    hologram.position.set(0, 1.5, 0)
    aboutGroup.add(hologram)

    // Add pulsing effect to hologram
    const pulseHologram = () => {
      gsap.to(hologramMaterial, {
        opacity: 0.1,
        duration: 1.5,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.to(hologramMaterial, {
            opacity: 0.3,
            duration: 1.5,
            ease: "power1.inOut",
            onComplete: pulseHologram,
          })
        },
      })
    }
    pulseHologram()

    // Add floating text elements around hologram
    const createTextElement = (text: string, position: THREE.Vector3, color: number) => {
      const canvas = document.createElement("canvas")
      canvas.width = 256
      canvas.height = 64
      const context = canvas.getContext("2d")
      if (context) {
        context.fillStyle = "#000000"
        context.fillRect(0, 0, canvas.width, canvas.height)
        context.font = "Bold 24px Arial"
        context.fillStyle = new THREE.Color(color).getStyle()
        context.fillText(text, 10, 40)

        const texture = new THREE.CanvasTexture(canvas)
        const material = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          side: THREE.DoubleSide,
        })

        const geometry = new THREE.PlaneGeometry(2, 0.5)
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.copy(position)
        mesh.lookAt(0, position.y, 0)
        return mesh
      }
      return null
    }

    // Add key info around hologram
    const keyInfo = [
      { text: "Senior Software Engineer", position: new THREE.Vector3(0, 3, 0), color: 0x4a88ff },
      { text: "Solutions Architect", position: new THREE.Vector3(0, 2.5, 0), color: 0x4a88ff },
      { text: "Real-time Web Applications", position: new THREE.Vector3(2, 1.5, 1), color: 0x88ff4a },
      { text: "C#/.NET Core Expert", position: new THREE.Vector3(-2, 1.5, -1), color: 0xff4a88 },
      { text: "React & WebSockets", position: new THREE.Vector3(-2, 1.5, 1), color: 0x88ff4a },
      { text: "Blockchain Solutions", position: new THREE.Vector3(2, 1.5, -1), color: 0xff4a88 },
    ]

    keyInfo.forEach((info) => {
      const textElement = createTextElement(info.text, info.position, info.color)
      if (textElement) {
        aboutGroup.add(textElement)
      }
    })

    // Skills pillars
    const skillsGroup = new THREE.Group()
    skillsGroup.visible = false
    scene.add(skillsGroup)

    // Group skills by category
    const skillCategories = experienceData.skills.reduce(
      (acc, skill) => {
        if (!acc[skill.category]) {
          acc[skill.category] = []
        }
        acc[skill.category].push(skill)
        return acc
      },
      {} as Record<string, typeof experienceData.skills>,
    )

    // Create pillars for each category
    let categoryIndex = 0
    for (const category in skillCategories) {
      const skills = skillCategories[category]
      const categoryAngle = (categoryIndex / Object.keys(skillCategories).length) * Math.PI * 2
      const categoryRadius = 3.5

      const categoryX = Math.sin(categoryAngle) * categoryRadius
      const categoryZ = Math.cos(categoryAngle) * categoryRadius

      // Create category label
      const canvas = document.createElement("canvas")
      canvas.width = 256
      canvas.height = 64
      const context = canvas.getContext("2d")
      if (context) {
        context.fillStyle = "#ffffff"
        context.font = "Bold 24px Arial"
        context.fillText(category, 10, 40)

        const texture = new THREE.CanvasTexture(canvas)
        const labelMaterial = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          side: THREE.DoubleSide,
        })

        const labelGeometry = new THREE.PlaneGeometry(2, 0.5)
        const label = new THREE.Mesh(labelGeometry, labelMaterial)
        label.position.set(categoryX, 0.5, categoryZ)
        label.rotation.y = -categoryAngle
        label.rotation.x = Math.PI / 4

        skillsGroup.add(label)
      }

      // Create skill pillars for this category
      skills.forEach((skill, skillIndex) => {
        const skillAngle = categoryAngle + ((skillIndex - (skills.length - 1) / 2) * Math.PI * 0.25) / skills.length
        const skillRadius = categoryRadius - 0.5

        const x = Math.sin(skillAngle) * skillRadius
        const z = Math.cos(skillAngle) * skillRadius

        const height = skill.level * 3 + 0.5

        const pillarGeometry = new THREE.BoxGeometry(0.4, height, 0.4)
        const pillarMaterial = new THREE.MeshStandardMaterial({
          color: new THREE.Color().setHSL(categoryIndex / Object.keys(skillCategories).length, 0.8, 0.5),
          metalness: 0.3,
          roughness: 0.7,
        })

        const pillar = new THREE.Mesh(pillarGeometry, pillarMaterial)
        pillar.position.set(x, height / 2, z)
        pillar.castShadow = true
        pillar.userData = { type: "skill", data: skill }

        skillsGroup.add(pillar)

        // Add text label
        const canvas = document.createElement("canvas")
        canvas.width = 256
        canvas.height = 64
        const context = canvas.getContext("2d")
        if (context) {
          context.fillStyle = "#ffffff"
          context.font = "Bold 16px Arial"
          context.fillText(skill.name, 10, 32)

          const texture = new THREE.CanvasTexture(canvas)
          const labelMaterial = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            side: THREE.DoubleSide,
          })

          const labelGeometry = new THREE.PlaneGeometry(1.5, 0.4)
          const label = new THREE.Mesh(labelGeometry, labelMaterial)
          label.position.set(x, height + 0.3, z)
          label.rotation.y = -skillAngle
          label.rotation.x = Math.PI / 4

          skillsGroup.add(label)
        }
      })

      categoryIndex++
    }

    // Experience timeline
    const experienceGroup = new THREE.Group()
    experienceGroup.visible = false
    scene.add(experienceGroup)

    // Create a curved path for the timeline
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-4, 1, -2),
      new THREE.Vector3(-2, 1, 0),
      new THREE.Vector3(0, 1, 1),
      new THREE.Vector3(2, 1, 0),
      new THREE.Vector3(4, 1, -2),
    ])

    // Create the timeline path
    const points = curve.getPoints(50)
    const timelineGeometry = new THREE.BufferGeometry().setFromPoints(points)
    const timelineMaterial = new THREE.LineBasicMaterial({ color: 0x4a88ff })
    const timelineCurve = new THREE.Line(timelineGeometry, timelineMaterial)
    experienceGroup.add(timelineCurve)

    // Add experience nodes along the curve
    experienceData.experience.forEach((exp, index) => {
      const t = index / (experienceData.experience.length - 1)
      const position = curve.getPointAt(t)

      // Create node
      const nodeGeometry = new THREE.SphereGeometry(0.15, 16, 16)
      const nodeMaterial = new THREE.MeshStandardMaterial({
        color: 0x4a88ff,
        emissive: 0x1a28ff,
        metalness: 0.7,
        roughness: 0.3,
      })

      const node = new THREE.Mesh(nodeGeometry, nodeMaterial)
      node.position.copy(position)
      node.castShadow = true
      node.userData = { type: "experience", data: exp }

      experienceGroup.add(node)

      // Create company card
      const cardGeometry = new THREE.BoxGeometry(2, 1.2, 0.05)
      const cardMaterial = new THREE.MeshStandardMaterial({
        color: 0x222222,
        metalness: 0.5,
        roughness: 0.5,
      })

      const card = new THREE.Mesh(cardGeometry, cardMaterial)

      // Position cards alternating above and below the timeline
      const cardOffset = index % 2 === 0 ? 1 : -1
      card.position.set(position.x, position.y + cardOffset * 1, position.z)

      // Rotate card to face center
      card.lookAt(0, card.position.y, 0)
      card.castShadow = true

      experienceGroup.add(card)

      // Add text label
      const canvas = document.createElement("canvas")
      canvas.width = 512
      canvas.height = 256
      const context = canvas.getContext("2d")
      if (context) {
        context.fillStyle = "#333333"
        context.fillRect(0, 0, 512, 256)

        context.fillStyle = "#ffffff"
        context.font = "Bold 24px Arial"
        context.fillText(exp.role, 20, 40)

        context.font = "20px Arial"
        context.fillText(exp.company, 20, 70)

        context.fillStyle = "#aaaaaa"
        context.font = "16px Arial"
        context.fillText(exp.period, 20, 100)

        // Wrap description text
        const maxWidth = 480
        const lineHeight = 20
        const words = exp.description.split(" ")
        let line = ""
        let y = 130

        for (let n = 0; n < words.length; n++) {
          const testLine = line + words[n] + " "
          const metrics = context.measureText(testLine)
          const testWidth = metrics.width

          if (testWidth > maxWidth && n > 0) {
            context.fillText(line, 20, y)
            line = words[n] + " "
            y += lineHeight
          } else {
            line = testLine
          }
        }
        context.fillText(line, 20, y)

        const texture = new THREE.CanvasTexture(canvas)
        const labelMaterial = new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.DoubleSide,
        })

        const labelGeometry = new THREE.PlaneGeometry(2, 1.2)
        const label = new THREE.Mesh(labelGeometry, labelMaterial)
        label.position.copy(card.position)
        label.rotation.copy(card.rotation)
        // Offset slightly to avoid z-fighting
        label.position.z += cardOffset * 0.01

        experienceGroup.add(label)
      }
    })

    // Projects objects
    const projectsGroup = new THREE.Group()
    projectsGroup.visible = false
    scene.add(projectsGroup)

    experienceData.projects.forEach((project, index) => {
      const angle = (index / experienceData.projects.length) * Math.PI * 2
      const radius = 3

      const x = Math.sin(angle) * radius
      const z = Math.cos(angle) * radius

      // Create project cube
      const cubeGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5)
      const cubeMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color().setHSL(index / experienceData.projects.length, 0.7, 0.5),
        metalness: 0.5,
        roughness: 0.5,
      })

      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
      cube.position.set(x, 1, z)
      cube.castShadow = true
      cube.userData = { type: "project", data: project }

      // Rotate cube slightly
      cube.rotation.y = angle
      cube.rotation.x = Math.PI / 6

      projectsGroup.add(cube)

      // Add floating icons representing technologies
      project.technologies.forEach((tech, techIndex) => {
        const iconGeometry = new THREE.SphereGeometry(0.15, 16, 16)
        const iconMaterial = new THREE.MeshStandardMaterial({
          color: new THREE.Color().setHSL((index + techIndex * 0.2) / experienceData.projects.length, 0.9, 0.7),
          emissive: new THREE.Color().setHSL((index + techIndex * 0.2) / experienceData.projects.length, 0.9, 0.3),
          metalness: 0.2,
          roughness: 0.8,
        })

        const icon = new THREE.Mesh(iconGeometry, iconMaterial)
        const techAngle = (techIndex / project.technologies.length) * Math.PI * 2
        const techRadius = 1

        icon.position.set(
          x + Math.sin(techAngle) * techRadius * 0.5,
          1.5 + Math.sin(techIndex * 0.5) * 0.5,
          z + Math.cos(techAngle) * techRadius * 0.5,
        )

        projectsGroup.add(icon)
      })

      // Add project name
      const canvas = document.createElement("canvas")
      canvas.width = 512
      canvas.height = 128
      const context = canvas.getContext("2d")
      if (context) {
        context.fillStyle = "#ffffff"
        context.font = "Bold 24px Arial"
        context.fillText(project.name, 10, 64)

        const texture = new THREE.CanvasTexture(canvas)
        const labelMaterial = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          side: THREE.DoubleSide,
        })

        const labelGeometry = new THREE.PlaneGeometry(2, 0.5)
        const label = new THREE.Mesh(labelGeometry, labelMaterial)
        label.position.set(x, 2.5, z)
        label.rotation.y = -angle
        label.lookAt(0, 2.5, 0)

        projectsGroup.add(label)
      }
    })

    // Education and achievements
    const educationGroup = new THREE.Group()
    educationGroup.visible = false
    scene.add(educationGroup)

    // Create education platform
    const eduPlatformGeometry = new THREE.BoxGeometry(6, 0.2, 3)
    const eduPlatformMaterial = new THREE.MeshStandardMaterial({
      color: 0x222266,
      metalness: 0.5,
      roughness: 0.5,
    })
    const eduPlatform = new THREE.Mesh(eduPlatformGeometry, eduPlatformMaterial)
    eduPlatform.position.set(0, 0.1, 0)
    eduPlatform.receiveShadow = true
    educationGroup.add(eduPlatform)

    // Add education items
    experienceData.education.forEach((edu, index) => {
      const x = -2 + index * 4

      // Create education building
      const buildingGeometry = new THREE.CylinderGeometry(0.5, 0.7, 1.5, 6)
      const buildingMaterial = new THREE.MeshStandardMaterial({
        color: 0x4466aa,
        metalness: 0.3,
        roughness: 0.7,
      })
      const building = new THREE.Mesh(buildingGeometry, buildingMaterial)
      building.position.set(x, 0.85, 0)
      building.castShadow = true
      educationGroup.add(building)

      // Add graduation cap
      const capGeometry = new THREE.BoxGeometry(0.8, 0.1, 0.8)
      const capMaterial = new THREE.MeshStandardMaterial({
        color: 0x222222,
        metalness: 0.5,
        roughness: 0.5,
      })
      const cap = new THREE.Mesh(capGeometry, capMaterial)
      cap.position.set(x, 1.7, 0)
      cap.castShadow = true
      educationGroup.add(cap)

      // Add tassel
      const tasselGeometry = new THREE.BoxGeometry(0.05, 0.2, 0.05)
      const tasselMaterial = new THREE.MeshStandardMaterial({
        color: 0xffcc00,
        metalness: 0.5,
        roughness: 0.5,
      })
      const tassel = new THREE.Mesh(tasselGeometry, tasselMaterial)
      tassel.position.set(x + 0.3, 1.6, 0.3)
      tassel.castShadow = true
      educationGroup.add(tassel)

      // Add text label
      const canvas = document.createElement("canvas")
      canvas.width = 512
      canvas.height = 256
      const context = canvas.getContext("2d")
      if (context) {
        context.fillStyle = "#ffffff"
        context.font = "Bold 24px Arial"
        context.fillText(edu.institution, 10, 40)

        context.font = "20px Arial"
        context.fillText(edu.degree, 10, 70)

        context.fillStyle = "#aaaaaa"
        context.font = "16px Arial"
        context.fillText(edu.period, 10, 100)

        if (edu.description) {
          // Wrap description text
          const maxWidth = 480
          const lineHeight = 20
          const words = edu.description.split(" ")
          let line = ""
          let y = 130

          for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + " "
            const metrics = context.measureText(testLine)
            const testWidth = metrics.width

            if (testWidth > maxWidth && n > 0) {
              context.fillText(line, 10, y)
              line = words[n] + " "
              y += lineHeight
            } else {
              line = testLine
            }
          }
          context.fillText(line, 10, y)
        }

        const texture = new THREE.CanvasTexture(canvas)
        const labelMaterial = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          side: THREE.DoubleSide,
        })

        const labelGeometry = new THREE.PlaneGeometry(2.5, 1.25)
        const label = new THREE.Mesh(labelGeometry, labelMaterial)
        label.position.set(x, 0.85, -1.5)
        label.rotation.x = -Math.PI / 6

        educationGroup.add(label)
      }
    })

    // Add achievements
    experienceData.achievements.forEach((achievement, index) => {
      const angle = (index / experienceData.achievements.length) * Math.PI * 2
      const radius = 2.5

      const x = Math.sin(angle) * radius
      const z = Math.cos(angle) * radius - 4 // Position behind education

      // Create achievement trophy
      const baseGeometry = new THREE.CylinderGeometry(0.2, 0.3, 0.1, 16)
      const baseMaterial = new THREE.MeshStandardMaterial({
        color: 0xdddddd,
        metalness: 0.8,
        roughness: 0.2,
      })
      const base = new THREE.Mesh(baseGeometry, baseMaterial)
      base.position.set(x, 0.05, z)
      base.castShadow = true
      educationGroup.add(base)

      const stemGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.3, 16)
      const stemMaterial = new THREE.MeshStandardMaterial({
        color: 0xdddddd,
        metalness: 0.8,
        roughness: 0.2,
      })
      const stem = new THREE.Mesh(stemGeometry, stemMaterial)
      stem.position.set(x, 0.25, z)
      stem.castShadow = true
      educationGroup.add(stem)

      const cupGeometry = new THREE.CylinderGeometry(0.2, 0.1, 0.3, 16)
      const cupMaterial = new THREE.MeshStandardMaterial({
        color: 0xffcc00,
        metalness: 0.8,
        roughness: 0.2,
      })
      const cup = new THREE.Mesh(cupGeometry, cupMaterial)
      cup.position.set(x, 0.5, z)
      cup.castShadow = true
      educationGroup.add(cup)

      // Add text label
      const canvas = document.createElement("canvas")
      canvas.width = 512
      canvas.height = 128
      const context = canvas.getContext("2d")
      if (context) {
        context.fillStyle = "#ffffff"
        context.font = "Bold 20px Arial"
        context.fillText(achievement.title, 10, 30)

        // Wrap description text
        const maxWidth = 480
        const lineHeight = 20
        const words = achievement.description.split(" ")
        let line = ""
        let y = 60

        for (let n = 0; n < words.length; n++) {
          const testLine = line + words[n] + " "
          const metrics = context.measureText(testLine)
          const testWidth = metrics.width

          if (testWidth > maxWidth && n > 0) {
            context.fillText(line, 10, y)
            line = words[n] + " "
            y += lineHeight
          } else {
            line = testLine
          }
        }
        context.fillText(line, 10, y)

        const texture = new THREE.CanvasTexture(canvas)
        const labelMaterial = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          side: THREE.DoubleSide,
        })

        const labelGeometry = new THREE.PlaneGeometry(2, 0.5)
        const label = new THREE.Mesh(labelGeometry, labelMaterial)
        label.position.set(x, 1, z)
        label.rotation.y = -angle
        label.lookAt(0, 1, -4)

        educationGroup.add(label)
      }
    })

    // Particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 500
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x4a88ff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Raycaster for interaction
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    let intersectedObject: THREE.Object3D | null = null

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Handle mouse move for hover effects
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Handle click for object interaction
    const handleClick = () => {
      if (intersectedObject && intersectedObject.userData && intersectedObject.userData.data) {
        // Show info about the clicked object
        console.log("Clicked:", intersectedObject.userData)
      }
    }

    window.addEventListener("click", handleClick)

    // Animation loop
    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      // Animate particles
      particlesMesh.rotation.y = elapsedTime * 0.05

      // Rotate about hologram
      if (aboutGroup.visible) {
        aboutGroup.rotation.y = elapsedTime * 0.2
      }

      // Update controls
      controls.update()

      // Update raycaster
      raycaster.setFromCamera(mouse, camera)

      // Check for intersections
      const objectsToTest = [
        ...skillsGroup.children,
        ...projectsGroup.children,
        ...experienceGroup.children,
        ...educationGroup.children,
      ].filter((obj) => obj.type === "Mesh")

      const intersects = raycaster.intersectObjects(objectsToTest)

      if (intersects.length > 0) {
        if (intersectedObject !== intersects[0].object) {
          if (intersectedObject) {
            // Reset previous object
            gsap.to(intersectedObject.scale, { x: 1, y: 1, z: 1, duration: 0.3 })
          }

          intersectedObject = intersects[0].object

          // Scale up new object
          gsap.to(intersectedObject.scale, { x: 1.1, y: 1.1, z: 1.1, duration: 0.3 })
        }
      } else {
        if (intersectedObject) {
          // Reset object when not hovering anymore
          gsap.to(intersectedObject.scale, { x: 1, y: 1, z: 1, duration: 0.3 })
          intersectedObject = null
        }
      }

      // Render
      renderer.render(scene, camera)

      // Call animate again on the next frame
      window.requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Show loading screen for a bit
    setTimeout(() => {
      setLoading(false)
    }, 2000)

    // Set visibility based on active section
    const updateVisibility = () => {
      aboutGroup.visible = activeSection === "about"
      skillsGroup.visible = activeSection === "skills"
      experienceGroup.visible = activeSection === "experience"
      projectsGroup.visible = activeSection === "projects"
      educationGroup.visible = activeSection === "education"
    }
    updateVisibility()

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("click", handleClick)

      // Dispose geometries and materials
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose()

          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose())
          } else {
            object.material.dispose()
          }
        }
      })

      // Remove renderer
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }

      renderer.dispose()
    }
  }, [activeSection])

  // Handle section change
  useEffect(() => {
    let targetPosition = { x: 0, y: 3, z: 5 }

    switch (activeSection) {
      case "about":
        targetPosition = { x: 0, y: 3, z: 5 }
        break
      case "skills":
        targetPosition = { x: 0, y: 5, z: 5 }
        break
      case "experience":
        targetPosition = { x: 0, y: 3, z: 7 }
        break
      case "projects":
        targetPosition = { x: 5, y: 3, z: 0 }
        break
      case "education":
        targetPosition = { x: 0, y: 3, z: -5 }
        break
      default:
        targetPosition = { x: 0, y: 3, z: 5 }
    }

    setCameraPosition(targetPosition)
  }, [activeSection])

  const handleSectionChange = (section: string) => {
    setActiveSection(section)
  }

  return (
    <div className="relative w-full h-screen">
      {loading && <LoadingScreen />}
      <div ref={containerRef} className="w-full h-full" />
      <Navbar activeSection={activeSection} onSectionChange={handleSectionChange} />
      <InfoPanel activeSection={activeSection} data={experienceData} />
    </div>
  )
}
