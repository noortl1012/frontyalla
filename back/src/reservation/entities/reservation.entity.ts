import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Participant } from "src/participant/entities/participant.entity";
import { Paiement } from "src/paiement/entities/paiement.entity";
import { Event } from "src/event/entities/event.entity";

// Instead of using ENUM, define constants for etat values
export const ETAT_PENDING = "en attente";
export const ETAT_CONFIRMED = "confirmée";
export const ETAT_CANCELED = "annulée"; // Corrected the value

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  idReservation: number;
  
  @ManyToOne(() => Participant, participant => participant.reservations)
  participant: Participant;

  @OneToOne(() => Paiement, paiement => paiement.reservation)
  paiement: Paiement;
  
  @ManyToOne(() => Event, event => event.reservations)
  event: Event;

  @Column({ type: "timestamp" })
  date: Date;

  // Instead of ENUM, use VARCHAR
  @Column({ type: "varchar", length: 50 }) // Adjust length as needed
  etat: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
